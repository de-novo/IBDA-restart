import baseRsponseStatus from "../../../../config/baseRsponseStatus.js";
import { response, errResponse } from "../../../../config/response.js";

const regexName = /^[가-힣]+$/;
const regexEgName = /^[a-zA-Z\s]+$/;

/* 
    Member creat validation
    
    name { empty,length, typeError }
    eg_name { empty, lenght, typeError}
    
*/
//MiddleWare
const creatMemberValidation = async function (req, res, next) {
    const newMember = req.body.newMember;
    if (!newMember) {
        return res.send(
            errResponse(baseRsponseStatus.BODY_PROPERTY_NAME_ERREOR)
        );
    }
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
    const editMemberInfo = req.body.editMemberInfo;
    if (!editMemberInfo) {
        return res.send(
            errResponse(baseRsponseStatus.BODY_PROPERTY_NAME_ERREOR)
        );
    }
    if (req.params.memberIdx === 1) {
        return res.send(errResponse(baseRsponseStatus.MEMBER_CANNOT_MODIFEIED));
    }

    if (editMemberInfo.name) {
        if (editMemberInfo.name.length < 3) {
            return res.send(errResponse(baseRsponseStatus.MEMBER_NAME_LENGTH));
        } else if (!regexName.test(editMemberInfo.name)) {
            return res.send(
                errResponse(baseRsponseStatus.MEMBER_NAME_TYPEERROR)
            );
        }
    }

    if (editMemberInfo.eg_name) {
        if (editMemberInfo.eg_name.length < 4) {
            return res.send(
                errResponse(baseRsponseStatus.MEMBER_EG_NAME_LENGTH)
            );
        } else if (!regexEgName.test(editMemberInfo.eg_name)) {
            return res.send(
                errResponse(baseRsponseStatus.MEMBER_EG_NAME_TYPEERROR)
            );
        }
    }

    //status 있으면 안됨.

    if (editMemberInfo.status) {
        return res.send(errResponse(baseRsponseStatus.MEMBER_CANT_EDIT_STATUS));
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

const selectMemberIdxValidation = async function (req, res, next) {
    const memberIdx = req.params.memberIdx;
    if (!memberIdx) {
        return res.send(errResponse(baseRsponseStatus.MEMBER_MBMBERIDX_EMPTY));
    } else if (memberIdx < 1) {
        return res.send(errResponse(baseRsponseStatus.MEMBER_MBMBERIDX_ERROR));
    }
    next();
};

//nonMiddleWare
const changeMemberstatusValidation = async function (req, res, next) {
    const status = req.body.status;

    if (!status) {
        return res.send(errResponse(baseRsponseStatus.MEMBER_STATUS_EMPTY));
    } else if (
        !(status === "ACTIVE" || status === "INACTIVED" || status == "DELETED")
    ) {
        return res.send(errResponse(baseRsponseStatus.MEMBER_STATUS_TYPEERROR));
    }
};

export default {
    middleWare: {
        creatMemberValidation,
        editMemeberValidation,
        selectMemberIdxValidation,
    },
};
