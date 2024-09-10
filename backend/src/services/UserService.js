import db from "../models";
import bcrypt from 'bcrypt'

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
