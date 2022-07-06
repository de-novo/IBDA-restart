import { errResponse, response } from "../../../config/response.js";
import baseRsponseStatus from "../../../config/baseRsponseStatus.js";

const changeObjectToString = (object) => {
    return Object.entries(object)
        .map((array) => array.join(" = "))
        .join(" and ");
};

const admin = {
    selectMember: async function (connection, props) {
        /*
        prors는 Object 여야함.
        올수있는값 
        {
            memberIdx,
            name,
            eg_name,
            roleIdx
        }
        개수는 상관없음
        */

        if (!(Object.keys(props).length === 0)) {
            const params = changeObjectToString(props);

            const selectMemberQuery =
                `
                SELECT * FROM member
                WHERE ` + params;
            // WHERE ${" ? = ? and".repeat(Object.keys(props).length - 1) + " ? = ? ;"}
            const [selectMemberRow] = await connection.query(selectMemberQuery);
            console.log(selectMemberRow);
            return selectMemberRow;
        } else {
            const selectMemberQuery = `
            SELECT * FROM member ;
            `;
            const [selectMemberRow] = await connection.query(selectMemberQuery);
            return selectMemberRow;
        }
    },

    creatMember: async function (connection, creatMemberParams) {
        const selectUserListQuery = `
                    INSERT INTO member SET ? ; 
                    `;
        const [userRows] = await connection.query(
            selectUserListQuery,
            creatMemberParams
        );
        return userRows;
    },

    editMember: async function (connection, memberIdxParam, editMemberInfo) {
        const editMemberQuery = `
        UPDATE member 
        SET ?
        WHERE memberIdx = ?;
        `;

        const [editMemberRow] = await connection.query(editMemberQuery, [
            editMemberInfo,
            memberIdxParam.memberIdx,
        ]);

        return editMemberRow[0];
    },
    changeMemberstatus: async function (connection, memberIdxParam, status) {
        const changeMemberstatusQuery = `
        UPDATE member
        SET status = ?
        WHERE memberIdx = ?;
        `;

        const [changeMemberstatusRow] = await connection.query(
            changeMemberstatusQuery,
            [status, memberIdxParam.memberIdx]
        );

        return changeMemberstatusRow;
    },
};

export default { admin };
