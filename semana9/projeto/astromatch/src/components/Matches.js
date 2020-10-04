import React, { useState, useEffect } from 'react';
import axios from "axios"
import { BASE_URL } from "./URL/Url"
import { Div, TextoClear, ContainerMatches, ButtonClear, ButtonC, ImgClear, NavLine,Botao,LogoConfig } from "./NAVBAR/styled"
import NavBar from "./NavBar"
import Logo from "../img/logo.png"




export default function Matches(props) {
    const [activityDetail, setActivityDetail] = useState([]);



    const getDetails = () => {

        axios
            .get(`${BASE_URL}/matches`, {


            }

            ).then(response => {
                console.log("entrou aki?", response.data.matches)
                setActivityDetail(response.data.matches)
            }).catch(err => {
                console.log(err);
            });
    }

    const cleanMatches = () => {
        const body = {
            id: activityDetail.id,
        };
        axios
            .put(
                `${BASE_URL}/clear`, body)
            .then((response) => {
                getDetails()
                console.log("deu certo")
            })
            .catch((erro) => {
                console.log(erro);
            });
    };
    useEffect(() => {
        getDetails();
    }, []);

    return (
        <Div>
            <NavLine>
                <Botao onClick={props.back} >Voltar</Botao>
               
                   <LogoConfig src={Logo}></LogoConfig> 
                    
            </NavLine>
            
            {activityDetail.map((item) => {
                return (
                    <ContainerMatches >
                        
                            <ImgClear src={item.photo} width={"80px"} height={"50px"}></ImgClear>
                        

                        <TextoClear>
                            <strong>{item.name}</strong>
                        </TextoClear>
                    </ContainerMatches>
                )
            })
            }
            <ButtonClear>
                <ButtonC onClick={cleanMatches}>apagar</ButtonC>
            </ButtonClear>


        </Div>
    );

};





