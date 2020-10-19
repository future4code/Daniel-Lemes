import { useHistory } from "react-router-dom";
import { Container, InputConfig, Form, Menu, Button, Input, ContainerButton , ButtonAnimation} from './styled'
import { goToSignUpPage, goBack } from "../../router/Router"
import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from "../../hooks/useForm";
import LOGO from "../../img/logo.png"
import { AnimationBack } from "../../Animation/AnimationBack";
import { AnimationSignUp } from "../../Animation/AnimationSigUp";

function SignUpPage() {
    const { form, onChange, resetState } = useForm({ senha: "", email: "", username: "" });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChange(name, value);
    };
    const history = useHistory();
    useEffect(() => {
        document.title = "Reddit"
        const token = window.localStorage.getItem("token");
        if (token) {
            history.push("/feed");
        }
    }, [history]);
    const handleSignUp = (event) => {
        event.preventDefault()
        resetState()
        const body = {
            email: form.email,
            password: form.senha,
            username: form.username
        };
        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup", body)
            .then((response) => {
                console.log("caiu aki nesse loginPage???", response.data)
                window.localStorage.setItem("token", response.data.token);
                history.push("/feed");
            })
            .catch((err) => {
                console.log("hummmm caiu aki", err);
            });
    };
    return (
        <Container>
            <Menu>
                <img src={LOGO} alt="logo" width={"150px"} />
                <div>
                       <ButtonAnimation onClick={() => goBack(history)}><AnimationBack /></ButtonAnimation>
                </div>
            </Menu>

            <Form onSubmit={handleSignUp}>

                <InputConfig>
                    <label>Nome:
                        <Input
                            value={form.username}
                            type="name"
                            name="username"
                            placeholder="Nome"
                            required
                            onChange={handleInputChange}>

                        </Input></label>
                </InputConfig>
                <InputConfig>
                    <label>E-mail:
                        <Input
                            value={form.email}
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required
                            onChange={handleInputChange}>

                        </Input></label>
                </InputConfig>
                <InputConfig>
                    <label>Senha:
                        <Input
                            value={form.senha}
                            type="password"
                            name="senha"
                            placeholder="senha"
                            required
                            onChange={handleInputChange}>
                        </Input></label>
                </InputConfig>

                <ContainerButton>

                    <Button>Cadastre-se</Button>
                </ContainerButton>
            </Form>
            <AnimationSignUp />
        </Container>
    );
}
export default SignUpPage;


