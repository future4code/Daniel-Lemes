import React, { useState, useEffect } from 'react'
import { goBack } from "../../Router/Router";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../Utilization/BaseUrl";
import { useForm } from "../../Hooks/useForm";
import {Area, Text, FormControl, Select, Fieldset, Legend,Label, Input, Container, Botao}
from "./styled"
import { AnimationBack } from '../../Components/Animation/AnimationBack';



const AplicationFormPage = () => {
    const [planeta, setPlaneta] = useState([])

    const { form, onChange } = useForm(
        { name: "", age: "", applicationText: "", profession: "", country:planeta.name});
    const handleInputChange = (event) => {

        const { name, value } = event.target;

        onChange(name, value);
    };
    const pathParams = useParams();
    const history = useHistory();


    useEffect(() => {
        planetas();
    }, []);

    const planetas = () => {


        axios
            .get(" https://restcountries.eu/rest/v2/all",)
            .then((response) => {
                console.log("caiu aki planeta???", response.data)
                setPlaneta(response.data)

            })
            .catch((err) => {
                console.log("hummmm planet", err);
            });
    }



    const handleAppicationPage = (event) => {
        event.preventDefault();
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country,

        }
        console.log("o que esse fazzzzzzz", body)
        axios
            .post(`${BASE_URL}/trips/${pathParams.id}`, body, {

            })
            .then((response) => {
                console.log("caiu aki no create???", response.data)
                alert("Parabéns, Viagem cadastrada com sucesso")

            })
            .catch((err) => {
                console.log("hummmm caiu aki nesse", err);
            });
    };


   




    return (
        <Area>
            
            <FormControl onSubmit={handleAppicationPage} id="planet">
              
               <Fieldset> 
                <Legend><strong>Inscreva-se</strong> </Legend> 
                   <Container>
                    <Label for="planet">Nome:
                    <Input
                        value={form.name}
                        type="text"
                        name="name"
                        placeholder="Nome"
                        required
                        onChange={handleInputChange}
                    /></Label>
                    <Label for="planet">Idade:
                    <Input
                        value={form.age}
                        type="number"
                        name="age"
                        min="18"
                        placeholder="Digite sua Idade"
                        required
                        onChange={handleInputChange}
                    /></Label>
                    <Label for="planet">Motivo da Viagem:
                    <Input
                        value={form.applicationText}
                        type="text"
                        name="applicationText"

                        placeholder="Porque você quer ir?"
                        required
                        onChange={handleInputChange}
                    /></Label>
                    <Label for="planet">Profissão
                    <Input
                        value={form.profession}
                        type="text"
                        name="profession"
                        placeholder="Profissão"
                        pattern="[A-Za-z]{10,}+"
                        title="Você precisa digitar no mínimo 10 Letras"
                        required
                        onChange={handleInputChange}
                    /></Label>
                    <Label for="planet"> País:
                    <Select  name="country" onChange={handleInputChange} placehoder="País" required>
                        <option value=""></option>
                        {planeta.map((country) => {
                            return (<option value={country.name} name="country" required >{country.name}</option>)
                        })}
                    </Select></Label>
                    <Label for="planet">Nome da viagem - Planeta: 
                    <Select name="planet" id="planet" onChange={handleInputChange} value={form.planet} >
                        <option value={""}></option>
                        <option value={form.id} >Vênus</option>
                        <option value={form.id}>Marte</option>
                        <option value={form.id}>Júpiter</option>
                        <option value={form.id}>Saturno</option>
                        <option value={form.id}>Urano</option>
                        <option value={form.id}>Netuno</option>
                        <option value={form.id}>Plutão</option>
                    </Select></Label>
                    </Container>
                    <div>
                        <Botao>Fazer Login</Botao>
                    </div>
                    
                </Fieldset>
            </FormControl>
            <Text onClick={() => goBack(history)}><strong></strong>
                        <AnimationBack />
                    </Text>
              
             
        </Area>
    );
}

export default AplicationFormPage;
