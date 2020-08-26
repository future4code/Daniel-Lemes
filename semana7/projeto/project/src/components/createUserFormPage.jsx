import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "../constants/axiosConstants";

class CreateUserFormPage extends React.Component {
    state = {
        nameValue: "",
        emailValue: "",
        idValue: ""
    };

    onChangeName = (event) => {
        this.setState({ nameValue: event.target.value });
    };

    onChangeEmail = (event) => {
        this.setState({ emailValue: event.target.value });
    };

    createUser = () => {
        const body = {
            name: this.state.nameValue,
            email: this.state.emailValue,

        };

        axios
            .post(baseUrl, body, axiosConfig)
            .then((response) => {
                console.log(response);
                this.setState({ nameValue: "", emailValue: "" });
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    mostrarEmail = (userId) => {
        axios
            .get(`${baseUrl}/${userId}`, axiosConfig)
            .then((response) => {
                // this.getUsers();
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    render () {

        return (
            <div>
                <input
                    value={this.state.nameValue}
                    onChange={this.onChangeName}
                    placeholder="nome"
                />
                <input
                    value={this.state.emailValue}
                    onChange={this.onChangeEmail}
                    placeholder="email"
                />
                <button onClick={this.createUser}>Criar usuário</button>

                <button onClick={this.mostrarEmail}>mostar email</button>


            </div>
        );
    }
}

export default CreateUserFormPage;
