import React, {useState, useEffect} from 'react'
import { goBack } from "../../Router/Router";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../../Utilization/BaseUrl"

const LoginPage = () => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const history = useHistory();
    
  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      history.push("/details");
    }
  }, [history]);

    const handleEmailChange = (event) => {
        setEmailValue(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
    };

    const handleLogin = () => {
        const body = {
            email: emailValue,
            password: passwordValue
        };

        axios
            .post(`${BASE_URL}/login`, body)
            .then((response) => {
                console.log("caiu aki nesse???" ,response.data)
                localStorage.setItem("token", response.data.token);
                history.push("/details");
                // setEmailValue(response.data.token)
                // setPasswordValue(response.data.token)
            })
            .catch((err) => {
                console.log("hummmm caiu aki" ,err);
            });
    };


    return (
        <div>
            <h1>
                essa pagina é a login Page
    </h1>
            <div>
                <input type={"text"} value={emailValue} onChange={handleEmailChange} placeholder={"digite seu E-mail"}/>
                <input type={"password"} value={passwordValue} onChange={handlePasswordChange}placeholder={"digite sua senha"} />
                <button onClick={handleLogin}>Fazer Login</button>
            </div>
            <button onClick={() => goBack(history)}>Voltar</button>
        </div>
    );
}

export default LoginPage;
