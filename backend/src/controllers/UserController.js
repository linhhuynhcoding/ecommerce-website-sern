import db from '../models/index'
import { CreateUser, GetAllUser, ComparePass } from '../services/UserService';
import generateVerifyCode from "../utils/GenVerifyCode.js";
import { sendVerifyCode } from './../utils/EmailUtil.js';
class UserController {

    handleLogin = async (req, res) => {
        const { username, password } = req.body;
        // req.session.user = req.body;
        
        if (!username || !password) {
            return res.status(404).json({
                errCode: 1,
                errMessage: 'Thông tin không hợp lệ!',
            });  
        }
        await GetAllUser(username).then(async (data) => {
            if (data) {
                await ComparePass(username, password).then((r) => {
                    req.session.user = req.body;
                    req.session.authenticated = true;
                    return res.status(200).json({
                        errCode: 0,
                        errMessage: 'Đăng nhập thành công!',
                    });                  
                }).catch(e => {
                    return res.status(404).json({
                        errCode: 1,
                        errMessage: 'Mật khẩu không đúng!',
                    }); 
                })
            }
            else {
                return res.status(404).json({
                    errCode: 1,
                    errMessage: 'Tên đăng nhập hoặc mật khẩu không đúng!',
                });                    
            }
        }).catch((e) => {
            console.log(e);
            return res.status(505).json({
                statusCode: 505,
                errCode: 1,
                errMessage: 'Lỗi Server!',
                err: e
            });
        });
    }

    handleGetUser = async (req, res) => {

        const { username } = req.query;
        console.log(username);
        // return;

        if (!username) {
            return res.status(404).json({
                statusCode: 404,
                errCode: 1,
                errMessage: 'Lỗi tham số API!',
            });
        }
        await GetAllUser(username).then((data) => {
            return res.status(200).json({
                errCode: 0,
                errMessage: 'Tìm thành công!',
                data
            });
        }).catch((e) => {
            console.log(e);
            return res.status(505).json({
                statusCode: 505,
                errCode: 1,
                errMessage: 'Lỗi Server!',
                err: e
            });
        });
    }

    handleCreateUser = async (req, res) => {
        const { email, username, password } = req.session.user;
        console.log({ email, username, password });
        await CreateUser(email, username, password).then(() => {
            return res.status(200).json({
                errCode: 0,
                errMessage: 'Thêm người dùng vào Database thành công!',

            });
        }).catch((e) => {
            console.log(e);
            return res.status(505).json({
                errCode: 1,
                errMessage: 'Lỗi Server!'
            });
        });
    }

    handleCreateUserRequest = async (req, res) => {
        const { email, username, password } = req.body;

        await GetAllUser(username).then(async (data) => {
            if (!data) {
                const code = generateVerifyCode();
                req.session.user = req.body;
                if (code) {
                    await sendVerifyCode(email, code).then(rr => {
                        req.session.verifyCode = code;
                        console.log(req.session);
        
                    })
                    return res.status(200).json({
                        errCode: 0,
                        errMessage: 'OK'
                    })
                }
                else {
                    res.status(401);
                    throw new Error("Not authorized, no code.")
                }
            }
            else {
                return res.status(200).json({
                    errCode: 1,
                    errMessage: 'Tên đăng nhập đã tồn tại'
                })
            }

        }).catch((e) => {
            console.log(e);
            return res.status(505).json({
                statusCode: 505,
                errCode: 1,
                errMessage: 'Lỗi Server!',
                err: e
            });
        });

        


    }

}

module.exports = new UserController;