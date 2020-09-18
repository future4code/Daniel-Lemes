import React, { useState, useEffect } from 'react'
import { goBack } from "../../Router/Router";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../Utilization/BaseUrl";
import { useForm } from "../../Hooks/useForm"

const LoginPage = () => {
    const { form, onChange, resetState } = useForm({ senha: "", email: "" });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        onChange(name, value);
    };

    //  const [emailValue, setEmailValue] = useState("");
    //  const [passwordValue, setPasswordValue] = useState("");
    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem("token");

        if (token) {
            history.push("/create");
        }
    }, [history]);



    const handleLogin = (event) => {
        event.preventDefault()
        resetState()
        const body = {
            email: form.email,
            password: form.senha
        };

        axios
            .post(`${BASE_URL}/login`, body)
            .then((response) => {

                console.log("caiu aki nesse loginPage???", response.data)
                localStorage.setItem("token", response.data.token);
                history.push("/details");

            })
            .catch((err) => {
                console.log("hummmm caiu aki", err);
            });
    };


    return (

        <div>

            <form onSubmit={handleLogin}>

                <input
                    value={form.email}
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                    onChange={handleInputChange}
                />
                <input
                    value={form.senha}
                    type="password"
                    name="senha"
                    placeholder="senha"
                    required
                    onChange={handleInputChange}
                />
                <button>Fazer Login</button>
            </form>
            <button onClick={() => goBack(history)}>Voltar</button>
        </div>
    );
}

export default LoginPage;
