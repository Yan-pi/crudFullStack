import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    passwor: "040916",
    database: "crud",
});