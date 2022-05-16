import mysql from "mysql2/promise";
import config from "./config.js";

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: config.DB_HOST,
    user: config.DB_USER,
    port: config.DB_PORT,
    password: config.DB_PW,
    database: config.DB,
});

export { pool };
