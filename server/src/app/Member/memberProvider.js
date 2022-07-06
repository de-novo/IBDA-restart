import { errResponse, response } from "../../../config/response.js";
import baseRsponseStatus from "../../../config/baseRsponseStatus.js";

import { pool } from "../../../config/database.js";
import memberDao from "./memberDao.js";

const admin = {
    retrieveMemberList: async function (props) {
        const connection = await pool.getConnection(async (conn) => conn);

        try {
            const memberListResult = await memberDao.admin.selectMember(
                connection,
                props
            );
            connection.release();

            return memberListResult;
        } catch (err) {
            console.log(err.message);
        }
    },
};

export default {
    admin,
};
