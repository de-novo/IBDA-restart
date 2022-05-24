import { errResponse, response } from "../../../config/response.js";
import baseRsponseStatus from "../../../config/baseRsponseStatus.js";

// 모든 유저 조회
async function creatMember(connection, creatMemberParams) {
    const selectUserListQuery = `
                INSERT INTO member SET ?
                `;
    const [userRows] = await connection.query(
        selectUserListQuery,
        creatMemberParams
    );
    return userRows;
}

export default { creatMember };
