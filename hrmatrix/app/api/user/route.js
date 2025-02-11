import { createConnection } from "@/app/lib/db.js";

export async function POST(req) {

    try {
        const { user_id, date_of_birth, address, highest_qualification, institute_name, year_of_passing, account_number, bank_name, ifsc_code } = await req.json()
        // console.log(firstname, lastname, department, phonenumber, personalid, email);

        const db = await createConnection();

        const [existingUser] = await db.execute('SELECT * FROM employee_details WHERE user_id = ?', [user_id]);
        if (!existingUser) {
            return Response.json({ message: 'Employee does not exists' }, { status: 409 });
        }

        await db.execute('INSERT INTO employee_details  (user_id, date_of_birth, address, highest_qualification, institute_name, year_of_passing, account_number, bank_name, ifsc_code) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [user_id, date_of_birth, address, highest_qualification, institute_name, year_of_passing, account_number, bank_name, ifsc_code ]);
        return Response.json({ message: 'Data added successfully' }, { status: 201 });

    } catch (error) {
        return Response.json({ error: 'Internal Server Error',error }, { status: 500 });
    }
}


export async function GET(req) {
    try {

        const url = new URL(req.nextUrl);

        const employeeId = url.searchParams.get("id");
       
        const db = await createConnection();

        const [datas] = await db.query("SELECT * FROM user u LEFT JOIN employee_details d ON u.id = d.user_id WHERE u.id = ? ", [employeeId]);

        return Response.json({ data: datas }, { status: 200 });

    } catch (error) {
        console.error("Error fetching data:", error);
        return Response.json({ error: "Internal Server Error",error }, { status: 500 });
    }
}


export async function PUT(req) {
    try {

        const { user_id, new_date_of_birth, new_address, new_highest_qualification, new_institute_name, new_year_of_passing, new_account_number, new_bank_name, new_ifsc_code } = await req.json()
       
        const db = await createConnection();

        const [result] = await db.execute(
            "UPDATE employee_details SET date_of_birth = ?, address = ?, highest_qualification = ?, institute_name = ?, year_of_passing = ?, account_number = ?, bank_name = ?, ifsc_code = ? WHERE user_id = ?",
            [ new_date_of_birth, new_address, new_highest_qualification, new_institute_name, new_year_of_passing, new_account_number, new_bank_name, new_ifsc_code, user_id]
        );

        if (result.affectedRows === 0) {
            return Response.json({ error: "Employee not found",error }, { status: 404 });
        }

        return Response.json({ message: "Data updated successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error updating:", error);
        return Response.json({ error: "Internal Server Error",error }, { status: 500 });
    }
}



export async function DELETE(req) {
    
    try {
        
        const url = new URL(req.nextUrl);
        const employeeId = url.searchParams.get("employeeid");

        const db = await createConnection();

         const [existingEmployee] = await db.execute("SELECT * FROM user WHERE id = ?", [employeeId]);
        if (existingEmployee.length === 0) {
            return Response.json({ message: "Employee not found" }, { status: 404 });
        }

        await db.execute("DELETE FROM user WHERE id = ?", [employeeId]);

        console.log("employee details deleted !")
        return Response.json({ message: "Deleted successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error deleting datas:", error);
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
}