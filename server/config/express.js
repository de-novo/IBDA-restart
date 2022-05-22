import express from "express";
import config from "./config.js";
import cors from "cors";
import compression from "compression";
import methodOverride from "method-override";

import apiRoutes from "../src/app/apiRoute.js";
import adminRoutes from "../src/app/adminRoute.js";
import vhost from "vhost";

export default (app) => {
    app.use(compression());

    app.use(express.json());

    app.use(express.urlencoded({ extended: true }));

    app.use(methodOverride());

    app.use(cors());
    if (config.MODE === "production") {
        app.use(vhost(`admin.${config.DOMAIN}`, adminRoutes()));
        // app.use(vhost(`*.${config.DOMAIN}`,apiRoutes()));
        app.use(apiRoutes());
    } else if (config.MODE === "development") {
        app.use(vhost(`dev.admin.${config.DOMAIN}`, adminRoutes()));
        app.use(vhost(`dev.${config.DOMAIN}`, apiRoutes()));
        app.use(apiRoutes());
    }
};
