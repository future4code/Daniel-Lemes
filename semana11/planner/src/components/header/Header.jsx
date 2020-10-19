import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { AnimationTask } from "../../Animation/AnimationTask"
import { AnimationOption } from "../../Animation/AnimationOption";
import { AnimationAlert } from "../../Animation/AnimationAlert";
import { Container, InputButtons, Input, Select } from "./styled"

export default function Header() {
  const [inputValue, SetInputValue] = useState("");
  const [dayValue, SetDayValue] = useState("");
  const [error, setError] = useState(false);

  const DaysWeek = [
    "",
    "domingo",
    "segunda",
    "terca",
    "quarta",
    "quinta",
    "sexta",
    "sabado"
  ];

  {
    useEffect(() => {
      CreateTask()
    }, [])
  }

  const OnChangeInputValue = (event) => {
    SetInputValue(event.target.value);

  };

  const OnChangeDayValue = (event) => {
    SetDayValue(event.target.value);
  };

  const CreateTask = () => {
    if (inputValue !== "") {
      const body = {
        text: inputValue,
        day: dayValue
      };
      axios
        .post(
          "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-Jackson-daniel-lemes",
          body
        )
        .then((response) => {
          SetInputValue("")
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setError(true)
    }
  }


  return (
    <div>
      <Container>
        <InputButtons>
          <Input
            value={inputValue}
            onChange={OnChangeInputValue}
            placeholder="Digite algo aqui"
          />
          <Select onChange={OnChangeDayValue} value={dayValue} >
            {DaysWeek.map((days) => {
              return (
                <option onChange={OnChangeDayValue} value={days} key={days}>
                  {days}
                </option>
              );
            })}
          </Select>
          <span onClick={CreateTask}><AnimationTask /></span>


        </InputButtons> 
        {inputValue === "" ? (<p>Digite algo no Campo!<AnimationAlert /></p>) : (<AnimationOption />)}

      </Container>

     
    </div>
  );
}
