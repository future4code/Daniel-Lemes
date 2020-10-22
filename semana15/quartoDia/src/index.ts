//importando express com Request e Response e cors
import express, { Request, Response } from 'express';
import cors from 'cors';
//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}
let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

//EXERCÍCIO 1
//a. Qual método HTTP você deve utilizar para isso? R:get
//b. Como você indicaria a entidade que está sendo manipulada? R: /users

app.get("/users", (req: Request, res: Response): void => {

    try {
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});


//EXERCÍCIO 2

app.get("/users/:type", (req: Request, res: Response): void => {

    try {
        const usersByType = users.filter((user) => user.type.toLocaleLowerCase() === req.params.type.toLocaleLowerCase())
        res.status(200).send(usersByType);
    } catch (error) {
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});



//EXERCÍCIO 3

app.get("/users/name/:name", (req: Request, res: Response): void => {

    let message = "não encontrado"
    const usersByName = users.filter((user) => user.name.toLocaleLowerCase() === req.params.name.toLocaleLowerCase())
    if (usersByName.length === 0) {
        res.status(400).send({ message });
    } else {
        res.status(200).send(usersByName);
    }

});
//EXERCÍCIO 4

app.post("/users", (req: Request, res: Response): void => {
    try {
        const { id, name, email, age, type } = req.body;
        const user = {
            id,
            name,
            email,
            age,
            type
        }

        users.push(user);
        res.status(200).send({ message: "User created successfully" });
    } catch (error) {
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
})


//EXERCÍCIO 5

app.put("/users", (req: Request, res: Response) => {
    try {
        const { id, name, email, age, type } = req.body;
        const userIndex = users.findIndex((u) => u.id === id)
        if (userIndex === -1) {
            throw new Error()
        }

        users[userIndex].name = name;
        users[userIndex].email = email;
        users[userIndex].age = age;
        users[userIndex].type = type;
        res.status(200).send({ message: "User update successfully" });
    } catch (error) {
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
})

//EXERCÍCIO 6


app.patch("/users", (req: Request, res: Response) => {
    try {
        const { id, name } = req.body;
        const userIndex = users.findIndex((u) => u.id === id)
        if (userIndex === -1) {
            throw new Error()
        }

        users[userIndex].name = name;

        res.status(200).send({ message: "User update successfully" });
    } catch (error) {
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
})


// EXERCÍCIO 7

app.delete("/users/:id", (req: Request, res: Response) => {

    try {
        let errorCode: number = 400
        if (!req.headers.authorization) {
            errorCode = 401
            throw new Error()
        }
        const countryIndex: number = users.findIndex(
            (user) => user.id === Number(req.params.id)
        )
        if (countryIndex === -1) {
            errorCode = 404
            throw new Error()
        }
        users.splice(countryIndex, 1)
        res.status(200).end()


    } catch (error) {
        res.end()
    };
})


// // EXERCÍCIOS

// app.get("/users/query", (req: Request, res: Response): void =>{

//     const name = req.query.name
//     const age = Number(req.query.age)
//     console.log(`o nome é , ${name} e a idade é ${age}`)

//     try{

//        const user = users.find/*ou filter*/((u)=> u.name === name || u.age === age)
//        if(!user) {
//            throw new Error()
//        }

//         res.status(200).send(user);
//     }catch(error){
//         res.status(400).send({
//             message: "Error searching for users"
//         });
//     }
// });







const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

