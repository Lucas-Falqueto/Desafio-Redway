const UserController = require('./UserController')
const register = async (req, res) => {
    const { email } = req.body
    if (!email) {
        return res.json({ status: "error", error: "Insira um email" })
    } else {
        try {
            const verifyEmail = await new UserController().verifyEmail(email)
            if (verifyEmail) {
                const userSaved = {
                    email: email,
                }
                new UserController().save(userSaved)
                return res.json({ status: "success", success: "Usuário registrado com sucesso" })

            } else {
                return res.json({ status: "error", error: "Email já se encontra registrado" })
            }
        } catch (error) {
            return res.json({ status: "error", error: "Tente novamente mais tarde" })
        }

    }
}

module.exports = register;