import baseRsponseStatus from "../../../../config/baseRsponseStatus.js";
import { response, errResponse } from "../../../../config/response.js";

const regexName = /^[가-힣]+$/;
const regexEgName = /^[a-zA-Z\s]+$/;

/* 
    Member creat validation
    
    name { empty,length, typeError }
    eg_name { empty, lenght, typeError}
    
*/

const creatMemberValidation = async function (req, res, next) {
    const newMember = req.body.newMember;
    console.log(newMember);
    /* 
    name
    */
    if (!newMember.name) {
        return res.send(errResponse(baseRsponseStatus.MEMBER_NAME_EMPTY));
    } else if (newMember.name.length < 3) {
        return res.send(errResponse(baseRsponseStatus.MEMBER_NAME_LENGTH));
    } else if (!regexName.test(newMember.name)) {
        return res.send(errResponse(baseRsponseStatus.MEMBER_NAME_TYPEERROR));
    }

    /* 
    eg_name
    */
    if (!newMember.eg_name) {
        return res.send(errResponse(baseRsponseStatus.MEMBER_EG_NAME_EMPTY));
    } else if (newMember.eg_name.length < 4) {
        return res.send(errResponse(baseRsponseStatus.MEMBER_EG_NAME_LENGTH));
    } else if (!regexEgName.test(newMember.eg_name)) {
        return res.send(
            errResponse(baseRsponseStatus.MEMBER_EG_NAME_TYPEERROR)
        );
    }

    /* role */
    if (!newMember.roleIdx) {
        return res.send(errResponse(baseRsponseStatus.MEMBER_ROLEIDX_EMPTY));
    }

    /* subscription */
    if (!newMember.subscription) {
        return res.send(
            errResponse(baseRsponseStatus.MEMBER_SUBSCRIPTION_EMPTY)
        );
    }

    /* birth */
    if (!newMember.birth) {
        return res.send(errResponse(baseRsponseStatus.MEMBER_BIRTH_EMPTY));
    }

    next();
};

/* 
    Member edit validation
    
    name 있나 없나부터 
    
*/
const editMemeberValidation = async function (req, res, next) {
    const editMemberInfo = req.body.member;
    if (req.params.memberIdx === 1) {
        return res.send(errResponse(baseRsponseStatus.MEMBER_CANNOT_MODIFEIED));
    }
    if (editMemberInfo.name) {
        if (newMember.name.length < 3) {
            return res.send(errResponse(baseRsponseStatus.MEMBER_NAME_LENGTH));
        } else if (!regexName.test(newMember.name)) {
            return res.send(
                errResponse(baseRsponseStatus.MEMBER_NAME_TYPEERROR)
            );
        }
    }

    if (editMemberInfo.eg_name) {
        if (newMember.eg_name.length < 4) {
            return res.send(
                errResponse(baseRsponseStatus.MEMBER_EG_NAME_LENGTH)
            );
        } else if (!regexEgName.test(newMember.eg_name)) {
            return res.send(
                errResponse(baseRsponseStatus.MEMBER_EG_NAME_TYPEERROR)
            );
        }
    }
    if (editMemberInfo.roleIdx) {
    }
    if (editMemberInfo.subscription) {
    }
    if (editMemberInfo.insta) {
    }
    if (editMemberInfo.birth) {
    }
    if (editMemberInfo.introduce) {
    }
    if (editMemberInfo.profileimg) {
    }

    next();
};

export default {
    creatMemberValidation,
    editMemeberValidation,
};
