import { errResponse, response } from "../../../config/response.js";
import baseRsponseStatus from "../../../config/baseRsponseStatus.js";
import { pool } from "../../../config/database.js";
import memberDao from "./memberDao.js";
import logger from "../../../config/logger.js";
const admin = {
    creatMember: async function (newMember) {
        const connection = await pool.getConnection(async (conn) => conn);

        try {
            await connection.beginTransaction();
            const memberResult = await memberDao.creatMember(
                connection,
                newMember
            );

            await connection.commit();
            return response(baseRsponseStatus.SUCCESS);
        } catch (err) {
            logger.error(`App - creatMember Service error\n : ${err.message}`);
            await connection.rollback();
            return errResponse(baseRsponseStatus.DB_ERROR);
        } finally {
        }
    },
};

const api = {};

export default { admin, api };
