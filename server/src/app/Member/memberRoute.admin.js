import { Router } from "express";

import memberController from "./memberController.js";

import memberValidation from "./validation/memberVaildation.js";

const route = Router();
export default (app) => {
    app.use("/members", route);
    //get refreshToken 이용하여 accessToken  발급
    // refreshToken  없으면 강제로그아웃
    // accessToken 유효하지않으면 -> err

    //Admin token middleWare   필요

    // API 1.1  멤버 생성 API
    route.post(
        "/",
        memberValidation.middleWare.creatMemberValidation,
        memberController.admin.creatMember
    );

    // API 1.2 멤버 수정 API
    route.patch(
        "/:memberIdx",
        memberValidation.middleWare.editMemeberValidation,
        memberController.admin.editMember
    );

    //API 1.3 멤버 조회 API
    route.get("/", memberController.admin.selectMember);

    route.get(
        "/:memberIdx",
        memberValidation.middleWare.selectMemberIdxValidation,
        memberController.admin.selectMember
    );

    //API 1.4 멤버 상태 변경 API
    route.patch(
        "/:memberIdx/status",
        memberValidation.middleWare.selectMemberIdxValidation,
        memberController.admin.changeMemberstatus
    );


};
