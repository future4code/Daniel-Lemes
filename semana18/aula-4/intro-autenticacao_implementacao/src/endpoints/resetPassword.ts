import { Request, Response } from "express"
import selectUserByEmail from "../data/selectUserByEmail";
import { updatePassword } from "../data/updatePassword";
import { hash } from "../services/hasManager"
import { writeEmail } from "../services/mailer"

export async function resetPassword(req: Request, res: Response) {


    let errorCode = 400;
    try {

        const email = req.body.email;
        if (!email) {
            throw new Error("insira um email válido")
        }

        const user = await selectUserByEmail(email)

        if (!user) {
            errorCode = 404;
            throw new Error("usuário não encontrado");
        }
        const password = "daniel";
        const hasPassword = await hash(password)

        await updatePassword(user.id, hasPassword)


        await writeEmail(
            "daniel lemes < daniel@hotmail.com>",
            user.email,
            "Olá",
            `oi ${user.email}`,
            `<p>oi ${user.email} sua nova senha é ${password}</p>`
        );

        res.status(200).send({ message: "senha atualizada com sucesso" })
    } catch (error) {
        res.status(errorCode).send({ message: "deu ruim" })
        console.log(">>>",error.message)
    }
}
