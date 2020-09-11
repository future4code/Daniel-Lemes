import React, { useState, useEffect } from 'react';
import axios from "axios"
import { Body, Container, ImagemPerfil, Informacoes, Age, Texto, Bio, Bottom,Div, Img, ImgContainer, ImgConfig } from "./styled"
import Coracao from "../../img/coracao.png"
import Negativo from "../../img/x.png"
import NavBar from "../NavBar"
import Logo from "../../img/logo.png"
import CoracaoBranco from "../../img/coracaoBranco.png"
import Matches from '../Matches';
import { BASE_URL } from '../URL/Url';



export default function Cards(props) {
    const [profile, setProfile] = useState({})
        
    
  useEffect(() => {
        getProducts();
      }, []);

    const getProducts = () => {
        axios
            .get(`${BASE_URL}/person`, {
            })
            .then((response) => {
                console.log(response.data)
                setProfile(response.data.profile)
              
            })
            .catch((erro) => {
                console.log(erro);
            });
    };
    
    const postChoose = () => {    
    const body = {
        "id": profile.id,
        "choice":true
    }
        axios
            .post(`${BASE_URL}/choose-person`,body
            ).then((response) => {
                console.log("é essa?",response.data)
                getProducts()
               
            })
            .catch((erro) => {
                console.log(erro);
            });
    };
    
   
    return (
        <Div>
            
            <NavBar
            imagem={Logo}
            Add={props.Add}/>
            <Body>
                <Container>
                    <ImagemPerfil src={profile.photo} width={"200px"} heigth={"200px"}  />
                    <Informacoes>
                        <Age>{profile.name}, {profile.age}</Age>
                        <Bio>{profile.bio}</Bio>
                    </Informacoes>
                </Container>
            </Body>
            <ImgContainer>
            <ImgConfig>
            <Img src={Negativo} onClick={() => postChoose(false)}></Img>
            </ImgConfig> 
            <ImgConfig>
            <Img src={Coracao} onMouseOver={e => (e.currentTarget.src =(CoracaoBranco))} 
           
                                onMouseOut={e => (e.currentTarget.src =(Coracao))}onClick={() => postChoose(true)}></Img>
            </ImgConfig>
        </ImgContainer>
        
        </Div>
    )
}