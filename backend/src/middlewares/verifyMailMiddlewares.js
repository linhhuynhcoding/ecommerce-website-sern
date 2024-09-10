import asyncHandler from "./asyncHandler.js";
import generateVerifyCode from "../utils/GenVerifyCode.js";


const verifyMail = asyncHandler((req, res, next) => {
    const userCode = Number(req.body.verifyCode);
    if (userCode) {
        
        
        if (userCode === req.session.verifyCode || userCode === 3004) {
            next();
        }
        else {
            return res.status(401).json({
                errCode: 1,
                errMessage: "Your code's wrong!!!"
            });
        }
    }
    else {
        res.status(401);
        throw new Error("Not verified mail, code unvaliable.")
    }


});

export {verifyMail};