import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useForm } from "../../Hook/useForm";
import { Section, Semana, Domingo, Sabado, Segunda, Terca, Quarta, Quinta, Sexta,AnimationStyle, Button } from "./styled"
import Header from "../header/Header";
import { AnimationButton } from "../../Animation/AnimationButton";

export default function Container() {
    const [task, SetTask] = useState([]);

    useEffect(() => {
        getTasks();
    }, [task]);

    const getTasks = () => {
        axios
            .get(
                "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-Jackson-daniel-lemes"
            )
            .then((response) => {
                SetTask(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteText = (id) => {
        axios
            .delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-Jackson-daniel-lemes/${id}`
            )
            .then((response) => {
                // SetTask(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const tasksDay = (day) => {

        const renderDays = task.map((task) => {
            if (task.day === day) {
                return (
                    <div>
                        <AnimationStyle>
                            {task.text}{" "}
                           
                             <span onClick={() => deleteText(task.id)}>  <AnimationButton /> </span>
                        </AnimationStyle>
                    </div>
                )
            }
        })
        return renderDays
    }


    return (
        <div>
            <Header />
            <Section >
                <Semana >
                    <h3>Domingo</h3>
                    <Domingo >{tasksDay("domingo")}</Domingo>
                </Semana>

                <Semana>
                    <h3>Segunda-feira</h3>
                    <Segunda>{tasksDay("segunda")}</Segunda>

                </Semana>

                <Semana>
                    <h3>Terça-feira</h3>
                    <Terca>{tasksDay("terca")}</Terca>
                </Semana>

                <Semana>
                    <h3>Quarta-feira</h3>
                    <Quarta>{tasksDay("quarta")}</Quarta>
                </Semana>

                <Semana>
                    <h3>Quinta-feira</h3>
                    <Quinta>{tasksDay("quinta")}</Quinta>

                </Semana>

                <Semana>
                    <h3>Sexta-feira</h3>
                    <Sexta >{tasksDay("sexta")}</Sexta>
                </Semana>

                <Semana>
                    <h3>Sábado</h3>
                    <Sabado>{tasksDay("sabado")}</Sabado>
                </Semana>
            </Section>

        </div>
    );
}
