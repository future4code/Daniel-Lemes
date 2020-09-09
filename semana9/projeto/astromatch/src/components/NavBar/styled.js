import styled from "styled-components"
export const Body = styled.label `
display:flex;
justify-content: center;
margin-top: 20vh ;

z-index: 1;

`
export const Container = styled.div ` 
border-width: 2px;
border-style: solid;
border-color: red;
box-shadow: 20px;
&:hover {
  border-color: #1cbca6;
}
`

export const ImagemPerfil = styled.img `
width: 400px;
height: 480px;
display: block;
z-index: 1;`
export const Informacoes = styled.div ` 
position:absolute;
top:65vh;
margin-left:20px;
z-index: 1;
`
export const Texto = styled.p ` 
word-wrap: break-word;
color: white;
text-shadow: 2px 2px 2px black;`
export const Bio = styled.p `
width: 25vw;
color: white;
font-size: 1vw;
text-shadow: 2px 2px 2px black;
`
export const Age = styled.h3`
color: white;
text-shadow: 2px 2px 2px black;
`
export const Bottom = styled.button` 
display:block;
margin: 5px auto;
cursor:pointer;

`
