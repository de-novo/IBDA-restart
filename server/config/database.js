import mysql from "mysql2/promise";
import config from "./config.js";

// production level , Dev level 분리
// 궁금점 이렇게 하면 속도에 영향을 줄지.
const pool =
    config.MODE === "production"
        ? mysql.createPool({
              host: config.DB_HOST,
              user: config.DB_USER,
              port: config.DB_PORT,
              password: config.DB_PW,
              database: config.DB,
          })
        : mysql.createPool({
              host: config.DEV_DB_HOST,
              user: config.DEV_DB_USER,
              port: config.DEV_DB_PORT,
              password: config.DEV_DB_PW,
              database: config.DEV_DB,
          });

export { pool };
