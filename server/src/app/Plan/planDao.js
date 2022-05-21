import { errResponse, response } from "../../../config/response.js";
import baseRsponseStatus from "../../../config/baseRsponseStatus.js";

// 모든 유저 조회
async function functionName(connection) {
    const selectUserListQuery = `
                SELECT email, nickname 
                FROM UserInfo;
                `;
    const [userRows] = await connection.query(selectUserListQuery);
    return userRows;
}

module.exports = {
};
