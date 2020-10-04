import { useHistory } from "react-router-dom";
import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from "../../hooks/useForm";
import { goToSignUpPage } from "../../router/Router";
import { AnimationSignUp } from "../../Animation/AnimationSigUp";
import { Container, InputConfig, Form, Button, Input,Menu } from "./styled"
import LOGO from "../../img/logo.png"

function LoginPage() {
  
  const { form, onChange, resetState } = useForm({ senha: "", email: "" });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };
  const history = useHistory();
  useEffect(()  => {
    const token = window.localStorage.getItem("token");
    if (token) {
       history.push("/feed");
    }
  }, [history]);
  const handleLoginPage = (event) => {
      const tokenn = window.localStorage.getItem("token");
       if( tokenn ){ 
         alert("Parabéns")
       }else if(tokenn !== tokenn){
         alert("Usúario não cadastrado")
       }
        event.preventDefault() 
        resetState()
    const body = {
      email: form.email,
      password: form.senha,
    };
    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login", body)
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
        </Menu>

      <Form onSubmit={handleLoginPage}>
        <div>
          <InputConfig>
            <label>E-mail</label>
            <Input
              value={form.email}
              type="email"
              name="email"
              placeholder="E-mail"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
              onChange={handleInputChange}>

            </Input>
          </InputConfig>
          <InputConfig>
            <label>Senha</label>
            <Input
              value={form.senha}
              type="password"
              name="senha"
              placeholder="senha"
              required
              onChange={handleInputChange}>
            </Input>
          </InputConfig>
        </div>
        <div>
          <Button>Login</Button> 
        </div>
        <Button onClick={() => goToSignUpPage(history)}>Cadastre-se</Button>
      </Form>
      <AnimationSignUp />

    </Container>
  );
}
export default LoginPage;