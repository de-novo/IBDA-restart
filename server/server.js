import config from "./config/config.js";
import express from "express";
import logger from "./config/logger.js";
import loader from "./config/loader.js";

const app = express();

loader(app);

const server = app
    .listen(config.port, () => {
        logger.info(`
    #####################IBDA#######################
    🛡️  Server listening on port: ${config.port} 🛡️
    ################################################
    `);
    })
    .on("error", (err) => {
        console.log("error", ":serve.js");
        logger.error(err);

        process.exit(1);
    });

export { server };
