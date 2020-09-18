import Back from "../../IMG/fundo.jpg"
import styled from "styled-components";

export const Body = styled.body`
background-image: url(${Back});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`
export const Div = styled.div`
color:#fff;
border: white solid 1px;
display:flex;
align-items:center;
justify-content:space-around;
margin:3vw;

`
export const Flex = styled.div`


`
export const Nome = styled.p` 
text-align:center;

`
export const InfosContainer = styled.div` 
margin: 15px 0 
`
export const AnimationButtom = styled.div`
cursor:pointer
`