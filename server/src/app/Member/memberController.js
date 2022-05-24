import { errResponse, response } from "../../../config/response.js";
import baseRsponseStatus from "../../../config/baseRsponseStatus.js";
import memberService from "./memberService.js";

const admin = {
    /*
     * Admin API No. 1
     * API Name : 멤버 생성 (새로운 멤버 추가) API
     * [POST]
     * admin.domain.com/member
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
     * Admin API No. 1
     * API Name : 멤버 수정 (멤버 정보 수정) API
     * [PATCH]
     * admin.domain.com/member/:memberIdx
     */
    editMember: async function (req, res) {
        /*
        Body : 변경할 것들 
        
        */

        /* member idx 유효성 검사해야함 존재하는 멤버인가  */
        const memberIdx = req.params.memberIdx;
        const editMemberInfo = req.body.editMemberInfo;

        const editMemberResponse = await memberService.admin.editMember(memberIdx,editMemberInfo)
    },

};

const api = {};

export default {
    admin,
    api,
};
