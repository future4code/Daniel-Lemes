import React, { useState, useEffect } from 'react'
import { goBack } from "../../Router/Router";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../Utilization/BaseUrl";
import { useForm } from "../../Hooks/useForm";
import { goToHomePage } from "../../Router/Router";


const CreateTripPage = () => {

    const { form, onChange } = useForm(
        { name: "", planet: "", date: "", description: "", durationInDays: "" }
    );
    const handleInputChange = (event) => {

        const { name, value } = event.target;

        onChange(name, value);
    };
    const pathParams = useParams();
    const history = useHistory();
    




    const handleCreateTripPage = (event) => {
        event.preventDefault();
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays
        }
        console.log("o que esse fazzzzzzz", body)
        axios
            .post(`${BASE_URL}/trips`, body, {
                headers: {
                    auth: localStorage.getItem("token")
                }
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
        <div>
            <h1>Cadastro de Viagens</h1>
            <form onSubmit={handleCreateTripPage}>

                <input
                    value={form.name}
                    type="text"
                    name="name"
                    placeholder="Nome"
                    required
                    onChange={handleInputChange}
                />
                {/* <input
                    value={form.planet}
                    type="text"
                    name="planet"
                    placeholder="planetas"
                    required
                    onChange={handleInputChange}
                /> */}
                <select name="planet" id="planet" onChange={handleInputChange} value={form.planet} >
                    <option value={""}></option>
                    <option value={"venus"} >Vênus</option>
                    <option value={"marte"}>Marte</option>
                    <option value={"Jupter"}>Júpiter</option>
                    <option value={"saturno"}>Saturno</option>
                    <option value={"urano"}>Urano</option>
                    <option value={"netuno"}>Netuno</option>
                    <option value={"plutao"}>Plutão</option>
                </select>
                <input
                    value={form.date}
                    type="date"
                     min="10-01-2021" 
                    name="date"
                    placeholder="Data"
                    required
                    onChange={handleInputChange}
                />
                <input
                    value={form.description}
                    type="text"
                    name="description"
                    placeholder="descrição"
                    required
                    onChange={handleInputChange}
                />
                <input
                    value={form.durationInDays}
                    type="number"
                    name="durationInDays"
                    placeholder="duração em dias"
                    min="50"
                    title="precisa ser no minímo 50 dias"
                    required
                    onChange={handleInputChange}
                />

                <button>Fazer Login</button>
            </form>

            <button onClick={() => goBack(history)}>Voltar create</button>
        </div>
    );
}

export default CreateTripPage;