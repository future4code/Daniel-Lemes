import React, { useState, useEffect } from 'react';
import { goBack } from "../../Router/Router";
import { useHistory } from "react-router-dom";
import axios from "axios"
import LOGO from "../../IMG/LOGO.png"
import { Body, Div, Flex, Nome, InfosContainer, AnimationButtom } from "./styled"
import { NavBar, MenuNavBarBack, Text } from "../../Components/Header/styled"
import { AnimationBack } from "../../Components/Animation/AnimationBack"
import Footer from '../../Components/Footer/Footer';
import { AnimationRegister } from '../../Components/Animation/AnimationRegister';
const Trip = () => {
    const [viagens, setViagens] = useState([])


    const history = useHistory();


    useEffect(() => {
        getTrips();
    }, []);
    const getTrips = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel/trips", {
            })
            .then((response) => {
                console.log(response.data.trips)
                setViagens(response.data.trips)


            })
            .catch((erro) => {
                console.log(erro);
            });
    };



    return (
        <Body>

            <NavBar>

                <div>
                    <img src={LOGO} alt={"imagem"} width={"300px"} />
                </div>
                <MenuNavBarBack>
                    <Text onClick={() => goBack(history)}><strong></strong>
                        <AnimationBack />
                    </Text>
                </MenuNavBarBack>

            </NavBar>
            {
                viagens.map((item) => {
                    return (
                        <Div key={item.id}>
                            <InfosContainer>
                                <Flex>
                                    <h1>Viagem:</h1>
                                    <Nome> {item.name}</Nome>
                                </Flex>
                                <Flex>
                                    <h1>Planeta:</h1>
                                    <Nome> {item.planet}</Nome>
                                </Flex>
                                <Flex>
                                    <h1>Data:</h1>
                                    <Nome> {item.date}</Nome>
                                </Flex>
                                <Flex>
                                    <h1>Duração:</h1>
                                    <Nome> {item.durationInDays} Dias</Nome>
                                </Flex>
                                <Flex>
                                    <h1>Descrição:</h1>
                                    <Nome> {item.description}</Nome>
                                </Flex>

                            </InfosContainer>


                            <AnimationButtom>
                              <AnimationRegister />

                            </AnimationButtom>
                             
                            


                        </Div>


                    )
                })
            }

            <Footer />
        </Body >
    );
}
export default Trip

