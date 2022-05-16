import express from "express";
import config from "./config.js";
import cors from "cors";
import compression from "compression";
import methodOverride from "method-override";

import routes from "../src/app/index.js";

export default (app) => {
    app.use(compression());

    app.use(express.json());

    app.use(express.urlencoded({ extended: true }));

    app.use(methodOverride());

    app.use(cors());

    app.use(config.api.prefix, routes());
};
