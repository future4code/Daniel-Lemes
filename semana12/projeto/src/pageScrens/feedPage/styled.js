import styled from "styled-components"

export const Card = styled.div` 
border-width: 2px;
border-style: solid;
border-color: red;
box-shadow: 20px;
border-radius:20px;
box-shadow: 3px 3px 3px #ffff;
margin:2vh;
width: 30%;
max-width:300px;
&:hover {
  border-color: #1cbca6;
}
`
export const Div = styled.div` 
display:flex;
flex-direction:row;
justify-content:space-evenly;

flex-wrap:wrap;

`
export const DivMaterial = styled.div` 
display:flex;
justify-content:center;
margin: 2vh 0;
width:100%

`