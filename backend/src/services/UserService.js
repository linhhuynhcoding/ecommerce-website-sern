import db from "../models";
import bcrypt from 'bcrypt'

export const ComparePass = (username, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const User = await db.User.findOne({
                where: { userID: username },
                attributes: ['password']
            });

            const check = await bcrypt.compare(password, User['password']).then((res) => { return res });
            if (check) {
                resolve();
            }
            else {
                reject();
            }
        } catch (e) {
            reject(e)
        }
    });
}

export const CreateUser = (email, username, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            bcrypt.hash(password, 10).then(async function (hash) {
                await db.User.bulkCreate([{
                    userID: username,
                    username: username,
                    password: hash,
                    email: email,
                    role: 'User',
                }], {
                    validate: true,
                });
            });
            resolve();
        } catch (e) {
            reject(e)
        }
    });
}



export const GetAllUser = (idUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = {};
            if (idUser === 'all') {
                users = await db.User.findAll({ attributes: { exclude: ['password'] } });
            }
            else {
                users = await db.User.findOne({
                    where: { userID: idUser },
                    attributes: { exclude: ['password'] }
                });
            }
            resolve(users);

        } catch (e) {
            reject(e)
        }
    });
}

export const GetDetailUserInfo = (idUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = {};

            users = await db.User.findOne({
                where: { userID: idUser },
                attributes: { exclude: ['password'] }
            });

            resolve(users);

        } catch (e) {
            reject(e)
        }
    });
}
export const GetEmailUser = (idUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = {};

            users = await db.User.findOne({
                where: { userID: idUser },
                attributes: { include: ['email'] }
            });

            console.log(users);

            resolve(users['email']);

        } catch (e) {
            reject(e)
        }
    });
}
export const UpdateDetailUserInfo = ( _username, _email, _name, _phone, _dob, _gen ) => {
    return new Promise(async (resolve, reject) => {
        try {

            console.log(_username, _email, _phone, _dob, _gen);
            const users = await db.User.findOne({
                where: { userID: _username },
                attributes: { exclude: ['password'] }
            });

            await users.update({
                email : _email,
                phone : String(_phone),
                name : _name,
                dob : Date(_dob),
                gender : _gen
            })

            await users.save();

            resolve(users);

        } catch (e) {
            reject(e)
        }
    });
}

export const GetDetailUserAddress = (idUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            let addresses = {};

            addresses = await db.UserAddress.findOne({
                where: { userID: idUser },
            });
            if (!addresses) {
                await db.UserAddress.bulkCreate([{
                    userID: idUser,
                    city_province: "",
                    district: "",
                    ward_communce: "",
                    addressDetail: "",
                }], {
                    validate: true,
                });
            }

            resolve(addresses);

        } catch (e) {
            reject(e)
        }
    });
}

export const UpdateDetailUserAddress = ( _username, _city, _district, _ward, _detail ) => {
    return new Promise(async (resolve, reject) => {
        try {

            console.log( _username, _city, _district, _ward, _detail );
            const address = await db.UserAddress.findOne({
                where: { userID: _username },
            });

            await address.update({
                city_province: _city,
                district: _district,
                ward_communce: _ward,
                addressDetail: _detail,
            })

            await address.save();

            resolve(address);

        } catch (e) {
            reject(e)
        }
    });
}