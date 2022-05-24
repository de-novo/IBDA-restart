import { Router } from "express";

import historyAdminRoute from "./History/historyRoute.admin.js";
import memberAdminRoute from "./Member/memberRoute.admin.js";
import noticeAdminRoute from "./Notice/noticeRoute.admin.js";
import partnerAdminRoute from "./Partner/partnerRoute.admin.js";
import photoAdminRoute from "./Photo/photoRoute.admin.js";
import planAdminRoute from "./Plan/planRoute.admin.js";
import projectAdminRoute from "./Project/projectRoute.admin.js";

export default () => {
    const app = Router();

    /*
        routing 
        import userRoute from './User/userRoute.js'
        ex => userRoute(app)
    */
    historyAdminRoute(app);
    memberAdminRoute(app);
    noticeAdminRoute(app);
    partnerAdminRoute(app);
    photoAdminRoute(app);
    planAdminRoute(app);
    projectAdminRoute(app);

    return app;
};
