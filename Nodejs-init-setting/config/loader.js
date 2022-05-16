import expressLoader from "./express.js";
import logger from "./logger.js";

export default (app) => {
    expressLoader(app);
    logger.info("✌️ Express loaded");
};
