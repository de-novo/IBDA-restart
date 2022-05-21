
import { Router } from "express";
import { errResponse, response } from "../../../config/response.js";
import baseRsponseStatus from "../../../config/baseRsponseStatus.js";



const route = Router();
export default (app) => {
    app.use("/member", route);
    //get refreshToken 이용하여 accessToken  발급
    // refreshToken  없으면 강제로그아웃
    // accessToken 유효하지않으면 -> err

};
