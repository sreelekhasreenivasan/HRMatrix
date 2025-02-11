import { createConnection } from "@/app/lib/db.js";

export async function POST(req) {
    try {
        const { firstname, lastname, department, phonenumber, personalid, email } = await req.json()

        console.log(firstname, lastname, department, phonenumber, personalid, email);
        

        const db = await createConnection();

        const [existingUser] = await db.execute('SELECT * FROM user WHERE personalid = ?', [personalid]);

        if (existingUser.length > 0) {
            return Response.json({ message: 'Username already exists' }, { status: 409 });
        }

        await db.execute('INSERT INTO user (firstname, lastname, department, phonenumber, personalid, email ) VALUES (?, ?, ?, ?, ?, ?)', [firstname, lastname, department, phonenumber, personalid, email ]);

        return Response.json({ message: 'User registered successfully' }, { status: 201 });
    } catch (error) {
        return Response.json({ error: 'Internal Server Error', error }, { status: 500 });
    }
}