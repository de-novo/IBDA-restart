import { Router } from "express";


import memberAdminRoute from "./Member/memberRoute.admin.js";

export default () => {
    const app = Router();

    /*
        routing 
        import userRoute from './User/userRoute.js'
        ex => userRoute(app)
    */
   

    memberAdminRoute(app);
  

    return app;
};
