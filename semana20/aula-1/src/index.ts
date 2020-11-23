import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import createUser from './controller/user/createUser'
import getUserById from './controller/user/getUserById'
import editUser from './controller/user/editUser'
import createTask from './controller/task/createTask'
import getTaskById from './controller/task/getTaskById'
import login from './controller/user/login'
import { connection } from './data/connection'
import { userRouter } from './routes/userRoutes'
import { taskRouter } from './routes/taskRoutes'


dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", async function(req,res){
   res.send(await connection.raw('show tables'))
})

app.use("/user", userRouter);
app.use("/task", taskRouter);

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})

