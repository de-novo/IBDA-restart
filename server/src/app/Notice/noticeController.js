import { errResponse, response } from "../../../config/response.js";
import baseRsponseStatus from "../../../config/baseRsponseStatus.js";

import noticeService from "./noticeService.js";
import noticeProvider from "./noticeProvider.js";

const admin = {
    postNotice: async function (req, res) {
        const newNotice = req.body.newNotice;
        // 작성자는 미들웨어처리해서 따로 처리해야함.
        const postNoticeResponse = await noticeService.admin.postNotice(
            newNotice
        );
        return res.send(postNoticeResponse);
    },
};

const api = {};

export default {
    admin,
    api,
};
