import { errResponse, response } from "../../../config/response.js";
import baseRsponseStatus from "../../../config/baseRsponseStatus.js";

import { pool } from "../../../../../udemy_study/udemy_server_practice_nodejs/config/database.js";
import memberDao from "./memberDao";

export const retrieveMemberList = async function (props) {
    const connection = await pool.getConnection(async (conn) => conn);
    if (!props) {
        const memberListResult = await memberDao.selectMember(connection);
    }
};
