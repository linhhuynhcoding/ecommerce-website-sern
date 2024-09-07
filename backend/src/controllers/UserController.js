import db from '../models/index'
import UserService from '../services/UserService';
class UserController {
    
    handleGetAllUsers = async (req, res) => {
        const id = req.body.id ?? 'all';
        // console.log(req.body.id );
        const users = await UserService.GetAllUser(id.toLowerCase());
        
        return res.status(200).json({
            errCode: 0,
            errMessage: 'OK',
            users 
        });
    }         


}

module.exports = new UserController;