import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { visitFunctionBody } from 'typescript';
const app = express();
app.use(express.json());
app.use(cors());

type extract = {
    value: number,
    date: string,
    description: string
}
type clientInfo = {
    id: number,
    cpf: string,
    name: string,
    dateOfBirth: string,
    balance: number
    transictions: extract[]
}
let clients: clientInfo[] = [
    {
        id: 1,
        cpf: "016.132.770-24",
        name: "Guilherme Guy Louis",
        dateOfBirth: "08/11/1993",
        balance: 0,
        transictions: []
    },
    {
        id: 2,
        cpf: "010.144.099-33",
        name: "Lionel Messi",
        dateOfBirth: "08/01/1991",
        balance: 0,
        transictions: []
    },
    {
        id: 3,
        cpf: "853.485.684-25",
        name: "Fausto Silva",
        dateOfBirth: "02/03/1970",
        balance: 0,
        transictions: []
    },
    {
        id: 4,
        cpf: "845.745.336-88",
        name: "Tony Stark",
        dateOfBirth: "11/12/1955",
        balance: 0,
        transictions: []
    },
    {
        id: 5,
        cpf: "853.546.548-47",
        name: "Luiz Carlos Louis",
        dateOfBirth: "20/06/1955",
        balance: 0,
        transictions: []
    },
]

app.get("/clients", (req: Request, res: Response): void => {
    try {
        res.status(200).send(clients);
    } catch (error) {
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});
// POST / CRIAR CLIENTS
app.post("/clients", (req: Request, res: Response): void => {
    try {
        const { id, cpf, name, dateOfBirth, balance, transictions } = req.body;
        const user: clientInfo = {
            id,
            cpf,
            name,
            dateOfBirth,
            balance,
            transictions
        }
        const today = new Date()
        const todaysAge: string = user.dateOfBirth
        const [day, month, year] = todaysAge.split("/")
        const newDateOfBirth: Date = new Date(`${year}-${month}-${day}`)
        const ageInMilisseconds: number = today.getTime() - newDateOfBirth.getTime()
        const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365
        if (ageInYears >= 18) {
            const existingUserCpf = clients.find((u) => u.cpf === user.cpf);
            if (existingUserCpf) {
                res.status(400).send({
                    message: "Error! CPF already in use!"
                });
            }
            const existingUserId = clients.find((u) => u.id === user.id);
            if (existingUserId) {
                res.status(400).send({
                    message: "Error! ID already in use!"
                });
            }
            clients.push(user);
            res.status(200).send({ message: "User created successfully" });
        } else {
            res.status(400).send({
                message: "Error! Under 18"
            });
        }
    } catch (error) {
        res.status(400).send({
            message: "Error!"
        });
    }
})



app.post("/clients/payments", (req: Request, res: Response): void => {

    try {
        const { expirationDate, description, value, cpf } = req.body;
       
        const userIndex = clients.findIndex((u) => u.cpf === cpf)

        clients[userIndex].transictions.push({
            value: value,
            date: String(new Date(expirationDate)),
            description: description
        })
        res.status(200).send({ message: "User created successfully" });

    }catch (error) {
        res.status(400).send({
            message: "Error!"
        });
    }
})





// GET CLIENTS BY CPF
app.get("/clients/saldo/:cpf", (req: Request, res: Response): void => {
    const usersById = clients.filter((user) => user.cpf === req.params.cpf)
    const userIndex = clients.findIndex((u) => u.cpf === req.params.cpf)
    if (usersById.length === 0) {
        res.status(400).send("Error! User not found!");
    }
    res.status(200).send("The current balance is: " + String(clients[userIndex].balance));
});

app.put("/clients/extract/:id", (req: Request, res: Response) => {
    try {
        const { cpf, name, deposit } = req.body;
        const userIndex = clients.findIndex((u) => u.cpf === cpf)
        if (userIndex) {
            throw new Error()
        }
        const userIndexName = clients.findIndex((u) => u.name === name)
        if (userIndexName) {
            throw new Error()
        }
        clients[userIndex].balance = deposit + clients[userIndex].balance;
        clients[userIndex].transictions.push({
            value: deposit,
            date: String(new Date()),
            description: "Cash deposit"
        })
        res.status(200).send({ message: "User update successfully" });
    } catch (error) {
        res.status(400).send({
            message: "User not found"
        });
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});