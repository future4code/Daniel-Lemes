import express, { Express, Request, Response } from "express"
import cors from "cors"
import { countries, country } from "./countries"
import { convertTypeAcquisitionFromJson } from "typescript"




const app: Express = express()
app.use(cors())

app.get("/countries/search", (req: Request, res: Response)=>{
    let searchedCountry: country[] = countries
    let errorCode = 400
        try {
            if(req.query.name){ 
                searchedCountry = searchedCountry.filter (
                    country => country.name.includes(req.query.name as string) 
                )
                res.status(200).send(searchedCountry)
            } else if (!req.query.name) {
                errorCode = 401
                throw new Error()
            }
             if(req.query.capital){
                searchedCountry = searchedCountry.filter (
                    country => country.capital.includes(req.query.capital as string)
                )
                res.status(200).send(searchedCountry)
            } else if (!req.query.capital) {
                errorCode = 401
                throw new Error()
            }
            if(req.query.continent){
                searchedCountry = searchedCountry.filter (
                    country => country.continent.includes(req.query.continent as string)
                )
                res.status(200).send(searchedCountry)
                }else if (!req.query.continent) {
                    errorCode = 401
                    throw new Error()
                }
        } catch (error) {
                  res.status(404).send("Country not found") 
        }
})


app.get("/countries/:id", (req: Request, res: Response) => {
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)

    )
    if (result) {
        res.status(200).send(result)
    } else {
        res.status(404).send("Não encontrado esse")
    }
})

app.put("/countries/edit/:id", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {

        if (!req.headers.authorization) {
            errorCode = 401
            throw new Error()
        }
        //  else if (req.params || !req.body) {
        //     errorCode = 400
        //    throw new Error()
        //  } 
        else {
            const result: country | undefined = countries.find(
                country => country.id === Number(req.params.id)
            )
            if (!result) {
                errorCode = 404
                throw new Error()
            } else {
                result.capital = req.body.capital
                result.name = req.body.name
            }
            res.status(200).send()
        }
    } catch (error) {
        res.status(errorCode).end()
    }
})



app.delete("/countries/:id", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {

        if (!req.headers.authorization) {
            errorCode = 401
            throw new Error()
        }

        const countryIndex: number = countries.findIndex(
            (country) => country.id === Number(req.params.id)
        )

        if (countryIndex === -1) {
            errorCode = 404
            throw new Error()
        }

        countries.splice(countryIndex, 1)

        res.status(200).end()
    } catch (error) {
        console.log(error)
        res.status(errorCode).end()
    }
})


//  app.get('/test/hello', (req: Request, res: Response) => {
//     res.send(`Olá, mundo!`)
//    })
// app.get('/test/:number', (req: Request, res: Response) => {
//     res.send(
//     `Seu número da sorte é ${Number(req.params.number) + 3}!
//     `)
//    })


// app.get("/countries/search", (req:Request, res:Response)=> {
//     const result: country[] = countries.filter(
//         contry => contry.name.includes(req.query.name as string))
//         res.status(200).send(result)
// })

// app.get("/countries/:id", (req:Request, res:Response)=>{
//     const result: country | undefined = countries.find(
//         country => country.id === Number(req.params.id)
//     )
//     res.status(200).send(result)
// })








app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")

})




