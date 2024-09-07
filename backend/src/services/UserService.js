import db from "../models";
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
