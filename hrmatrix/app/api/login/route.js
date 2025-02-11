import { createConnection } from '@/app/lib/db.js';
// import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

export async function POST(request) {
    try {
        const { employeeID, password } = await request.json(); 

        const db = await createConnection();

        const [existingUsers] = await db.execute('SELECT * FROM user WHERE email = ?', [employeeID]);
        // console.log(existingUsers);
        

        if (existingUsers.length === 0) {
            return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
        }

        const user = existingUsers[0]; 
        // console.log(user);
        
        // const passwordMatch = await bcrypt.compare(password, user.personalid);
        // if (!passwordMatch) {
        //     return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
        // }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            SECRET_KEY,
            { expiresIn: '2h' }
        );

        console.log(token);

        return new Response(JSON.stringify({
            message: 'Login successful',
            user: { employeeID: user.email },
            token
        }), {
            status: 200
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal Server Error', error}), {
            status: 500
        });
    }
}
