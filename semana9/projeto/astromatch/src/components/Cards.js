import React, { useState, useEffect } from 'react';
import axios from "axios"
import { Body, Container, ImagemPerfil, Informacoes, Age, Texto, Bio, Bottom } from "./NavBar/styled"


export default function Cards() {
    const [profile, setProfile] = useState("")
    const [profile1, setProfile1] = useState("")
    const [profile2, setProfile2] = useState("")
    const [profile3, setProfile3] = useState("")

    useEffect(() => {
        document.title = `Nome: ${profile2}`;
      }, [profile2]);


    const getProducts = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daniel/person", {
            })
            .then((response) => {
                console.log(response.data)
                setProfile(response.data.profile.photo)
                setProfile1(response.data.profile.age)
                setProfile2(response.data.profile.name)
                setProfile3(response.data.profile.bio)
            })
            .catch((erro) => {
                console.log(erro);
            });
    };
    return (
        <>
            <Body>
                <Container>
                    <ImagemPerfil src={profile} width={"200px"} heigth={"200px"}  />
                    <Informacoes>
                        <Age>Idade: {profile1} Anos</Age>
                        <Texto>Nome: {profile2}</Texto>
                        <Bio>{profile3}</Bio>
                    </Informacoes>
                </Container>
                
            </Body>
            <Bottom onClick={getProducts}>add</Bottom>
        </>
    )
}