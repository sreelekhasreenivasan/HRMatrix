import mysql from 'mysql2/promise'


let connection;

export const createConnection = async() => {

    if (!connection) {

        connection = mysql.createConnection({

            host: "localhost",
            user:  "root",
            password:  "your_new_password",
            database: "hrmatrix"
        })
    } 
    return connection

    
}

