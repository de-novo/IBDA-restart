import { errResponse, response } from "../../../config/response.js";
import baseRsponseStatus from "../../../config/baseRsponseStatus.js";
import memberService from "./memberService.js";
import memberProvider from "./memberProvider.js";

const admin = {
    /*
     * Admin API No. 1.1
     * API Name : 멤버 생성 (새로운 멤버 추가) API
     * [POST]
     * admin.domain.com/members
     */
    creatMember: async function (req, res) {
        /*
        *  Body : newMember:{ 
            * 필수 name, eg_name, roleIdx, subscription, birth, 
        * 필수 X  insta, introduce, profileImgUrl,
        }
       
        
        */
        const newMember = req.body.newMember;
        const creatMemberResponse = await memberService.admin.creatMember(
            newMember
        );
        return res.send(creatMemberResponse);
    },

    /*
     * Admin API No. 1.2
     * API Name : 멤버 수정 (멤버 정보 수정) API
     * [PATCH]
     * admin.domain.com/members/:memberIdx
     */
    editMember: async function (req, res) {
        /*
        params : {memberIdx }
        Body : editMemberInfo :{ 변경해야 할것들 .}
        둘다 객체로 전달
        */

        const memberIdxParam = req.params;
        const editMemberInfo = req.body.editMemberInfo;

        const editMemberResponse = await memberService.admin.editMember(
            memberIdxParam,
            editMemberInfo
        );
        return res.send(editMemberResponse);
    },

    /*
     * Admin API No. 1.3
     * API Name : 멤버 조회 API
     * [GET]
     * admin.domain.com/members/:memberIdx
     * admin.domain.com/members
     *
     *  /:memberIdx
     *  params
     *
     */

    selectMember: async function (req, res) {
        /*
        params : {memberIdx }
        Body : MemberInfo :{ 변경해야 할것들 .}
        둘다 객체로 전달
        */
        const memberIdxParam = req.params;
        const memberInfo = req.body.memberInfo;
        const selectMemberList = await memberProvider.admin.retrieveMemberList({
            ...memberIdxParam,
            ...memberInfo,
        });
        if (selectMemberList.length === 0) {
            return res.send(
                errResponse(baseRsponseStatus.MEMBER_MBMBERIDX_NOT_EXIST)
            );
        }
        return res.send(
            response(baseRsponseStatus.SUCCESS, {
                memberList: selectMemberList,
            })
        );
    },

    changeMemberstatus: async function (req, res) {
        const memberIdxParam = req.params;
        const status = req.body.status;

        const changeMemberstatusResponse =
            await memberService.admin.changeMemberstatus(
                memberIdxParam,
                status
            );
        return res.send(changeMemberstatusResponse);
    },
};

const api = {};

export default {
    admin,
    api,
};
