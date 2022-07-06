import { errResponse, response } from "../../../config/response.js";
import baseRsponseStatus from "../../../config/baseRsponseStatus.js";
import { pool } from "../../../config/database.js";
import memberDao from "./memberDao.js";
import logger from "../../../config/logger.js";
import memberProvider from "./memberProvider.js";
const admin = {
    // Member creat
    creatMember: async function (newMember) {
        const connection = await pool.getConnection(async (conn) => conn);

        try {
            await connection.beginTransaction();
            const memberResult = await memberDao.admin.creatMember(
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
            connection.release();
        }
    },

    // Member edit
    editMember: async function (memberIdxParam, editMemberInfo) {
        const connection = await pool.getConnection(async (conn) => conn);

        try {
            await connection.beginTransaction();

            const selectMemberResult =
                await memberProvider.admin.retrieveMemberList(memberIdxParam);

            if (selectMemberResult[0].status === "INACTIVE") {
                return errResponse(baseRsponseStatus.MEMBER_INACTIVE_ACCOUNT);
            } else if (selectMemberResult[0].status === "DELETED") {
                return errResponse(baseRsponseStatus.MEMBER_DELETED_ACCOUNT);
            } else if (!selectMemberResult[0]) {
                return errResponse(
                    baseRsponseStatus.MEMBER_MBMBERIDX_NOT_EXIST
                );
            }
            const editMemberResult = await memberDao.admin.editMember(
                connection,
                memberIdxParam,
                editMemberInfo
            );

            await connection.commit();

            return response(baseRsponseStatus.SUCCESS, "수정완료");
        } catch (err) {
            logger.error(`App - editMember Service error\n : ${err.message}`);
            await connection.rollback();
            return errResponse(baseRsponseStatus.DB_ERROR);
        } finally {
            connection.release();
        }
    },
    changeMemberstatus: async function (memberIdxParam, status) {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            await connection.beginTransaction();

            const selectMemberResult =
                await memberProvider.admin.retrieveMemberList(memberIdxParam);

            if (selectMemberResult[0].status === "INACTIVE") {
                return errResponse(baseRsponseStatus.MEMBER_INACTIVE_ACCOUNT);
            } else if (selectMemberResult[0].status === "DELETED") {
                return errResponse(baseRsponseStatus.MEMBER_DELETED_ACCOUNT);
            } else if (!selectMemberResult[0]) {
                return errResponse(
                    baseRsponseStatus.MEMBER_MBMBERIDX_NOT_EXIST
                );
            }
            const changeMemberstatusResult =
                await memberDao.admin.changeMemberstatus(
                    connection,
                    memberIdxParam,
                    status
                );
            connection.commit();
            return response(baseRsponseStatus.SUCCESS, "생태변경 완료");
        } catch (err) {
            logger.error(
                `App - changeMemberstatus Service error\n : ${err.message}`
            );
            await connection.rollback();
            return errResponse(baseRsponseStatus.DB_ERROR);
        } finally {
            connection.release();
        }
    },
};

const api = {};

export default { admin, api };
