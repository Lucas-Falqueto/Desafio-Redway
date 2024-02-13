const db = require('../config/data-source')
const userModel = require('../model/UserModel')
const UserEntity = require('../entity/UserEntity')
module.exports = class UserController {
    async save({ email }) {
        const user = new userModel(email);
        const userTable = db.getRepository(UserEntity)
        return await userTable.save(user);
    }

    async verifyEmail(email) {
        const verifyEmail = await db.manager.find(UserEntity, { where: { email: email } });
        if (verifyEmail.length === 0) {
            return true
        } else {
            return false
        }
    }

}