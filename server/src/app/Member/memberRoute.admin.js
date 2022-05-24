import { Router } from "express";

import memberController from "./memberController.js";

import memberValidation from "./validation/memberVaildation.js";

const route = Router();
export default (app) => {
    app.use("/member", route);
    //get refreshToken 이용하여 accessToken  발급
    // refreshToken  없으면 강제로그아웃
    // accessToken 유효하지않으면 -> err
    route.post(
        "/",
        memberValidation.creatMemberValidation,
        memberController.admin.creatMember
    );
    route.patch(
        "/:memberIdx",
        memberValidation.editMemeberValidation,
        memberController.admin.editMember
    );
};
