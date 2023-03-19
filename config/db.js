import mysql from 'mysql';
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

const appEnv = dotenv.config();
dotenvExpand.expand(appEnv);

export default mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_TABLE
});