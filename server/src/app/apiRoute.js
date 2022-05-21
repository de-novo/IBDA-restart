import { Router } from "express";
import historyRoute from "./History/historyRoute.js";
import memberRoute from "./Member/memberRoute.js";
import noticeRoute from "./Notice/noticeRoute.js";
import partnerRoute from "./Partner/partnerRoute.js";
import photoRoute from "./Photo/photoRoute.js";
import planRoute from "./Plan/planRoute.js";
import projectRoute from "./Project/projectRoute.js";

export default () => {
    const app = Router();

    /*
        routing 
        import userRoute from './User/userRoute.js'
        ex => userRoute(app)
    */
   
    historyRoute(app);
    memberRoute(app);
    noticeRoute(app);
    partnerRoute(app);
    photoRoute(app);
    planRoute(app);
    projectRoute(app);

    return app;
};
