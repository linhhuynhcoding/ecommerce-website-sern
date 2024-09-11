import asyncHandler from '../middlewares/asyncHandler.js';
import { 
    CreateUser, 
    GetAllUser, 
    ComparePass, 
    GetDetailUserInfo,
    UpdateDetailUserInfo,
    GetDetailUserAddress,
    UpdateDetailUserAddress,
 } from '../services/UserService';
import generateVerifyCode from "../utils/GenVerifyCode.js";
import { sendVerifyCode } from './../utils/EmailUtil.js';
class UserController {
    auth = async (req, res) => {
        // console.log(`sessionList: ${req.sessionStore}`)
        // initSessionStorage(req, res, null);
        // res.setHeader('Content-Type', 'text/html');
        // res.setHeader('Set-Cookie', 'test=value;max-Age=3600;Path="/";');
        if (req.session.authenticated === true) {
            return res.status(200).json({
                errCode: 0,
                errMessage: 'OK',
                sessionId : req.sessionID,                
                user: req?.session?.username ?? null,
            });    
        }
        else {
            return res.status(401).json({
                errCode: 1,
                errMessage: 'Can not Authenticated, khác session',
                sessionId : req.sessionID
            });    

        }
    }

    handleLogin = async (req, res) => {
        // req.session.destroy();
        // res.clearCookie('connect.sid');
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
                    req.session.username = username;
                    req.session.authenticated = true;

                    req.session.save();
                    console.log(req.sessionID);
                    console.log(req.session);
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

    handleLogout = async (req, res) => {
        // req.session.destroy();
        const { username } = req.body;
        // req.session.user = req.body;

        if (!username ) {
            return res.status(404).json({
                errCode: 1,
                errMessage: 'Thông tin không hợp lệ!',
            });
        }
        
        req.session.destroy();
        res.clearCookie('connect.sid');
        
        return res.status(200).json({
            errCode: 0,
            errMessage: 'Đăng xuất thành công!',
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
            req.session.authenticated = true;

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

    getCurrentUserProfile = async (req, res) => {
        const { username } = req.query;
        console.log(req);
        // return;

        if (!username) {
            return res.json({
                statusCode: 404,
                errCode: 1,
                errMessage: 'Lỗi tham số API!',
            });
        }
        else {
            await GetDetailUserInfo(username).then((data) => {
                console.log(data);
                if (data) {
                    return res.json({
                        errCode: 0,
                        errMessage: 'Tìm thành công!',
                        data
                    });
                }
                else {
                    return res.status(404).json({
                        errCode: 1,
                        errMessage: 'Tìm thất bại!'
                    });;
                }            
            }).catch((e) => {return res.status(505)});
        }
    }

    updateCurrentUserProfile = async (req, res) => {
        console.log(req.body)
        const { username, email, name, phone, dob, gen } = req.body.user;
        // console.log({ username, email, phone, dob, gen });

        if (!username) {
            return res.json({
                statusCode: 404,
                errCode: 1,
                errMessage: 'Lỗi tham số API!',
            });
        }
        else {
            await UpdateDetailUserInfo(username, email ?? "", name ?? "", phone ?? "", dob ?? 0, gen ?? "").then((data) => {
                console.log(data);
                if (data) {
                    return res.status(200).json({
                        errCode: 0,
                        errMessage: 'Cập nhật thành công!',
                        data
                    });
                }
                else {
                    return res.status(404).json({
                        errCode: 1,
                        errMessage: 'Cập nhật thất bại!'
                    });
                }            
            }).catch((e) => {return res.status(505)});
        }
    }

    getCurrentUserAddress = async (req, res) => {
        const { username } = req.query;
        // console.log(req);
        // return;

        if (!username) {
            return res.json({
                statusCode: 404,
                errCode: 1,
                errMessage: 'Lỗi tham số API!',
            });
        }
        else {
            await GetDetailUserAddress(username).then((data) => {
                console.log(data);
                if (data) {
                    return res.json({
                        errCode: 0,
                        errMessage: 'Tìm thành công!',
                        data
                    });
                }
                else {
                    return res.status(404).json({
                        errCode: 1,
                        errMessage: 'Tìm thất bại!'
                    });;
                }            
            }).catch((e) => {return res.status(505)});
        }
    }

    updateCurrentUserAddress = async (req, res) => {
        console.log(req.body)
        const { username, city, district, ward, detail } = req.body;
        // console.log({ username, email, phone, dob, gen });

        if (!username) {
            return res.json({
                statusCode: 404,
                errCode: 1,
                errMessage: 'Lỗi tham số API!',
            });
        }
        else {
            await UpdateDetailUserAddress(username, city, district, ward, detail).then((data) => {
                console.log(data);
                if (data) {
                    return res.status(200).json({
                        errCode: 0,
                        errMessage: 'Cập nhật thành công!',
                        data
                    });
                }
                else {
                    return res.status(404).json({
                        errCode: 1,
                        errMessage: 'Cập nhật thất bại!'
                    });
                }            
            }).catch((e) => {return res.status(505)});
        }
    }
}

module.exports = new UserController;