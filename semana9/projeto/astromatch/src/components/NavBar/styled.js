import styled from "styled-components"
import Background from "../../img/fundo.jpg"


export const NavBarConfig = styled.div ` 
display: flex;
justify-content:space-evenly;
`

export const LogoConfig = styled.img ` 
width: 150px;
height: 40px;
border-radius:10px
`
export const Botao = styled.button ` 
width: 100px;
height:30px;
color: #ffff;
background-color: black;
box-shadow: 2px 2px 2px #ffff;
border-radius:10px;
border:0;
&:hover {
  color: black;
background-color: white;
transition: 0.7s; 
 transform: scale(0.9);
}

`
export const Botao2 = styled.button ` 
width: 100px;
height:30px;
color: #ffff;
background-color: black;
box-shadow: 2px 2px 2px #ffff;
border-radius:10px;
border:0;
&:hover {
  color: black;
background-color: white;
transition: 0.7s; 
 transform: scale(0.9);
}
`

export const Body = styled.label `
display:flex;
justify-content: center;
margin-top: 2vh ;
z-index: 1;
`
export const Div = styled.div`
width:30rem;
min-height:40rem;
background-image: url(${Background});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
margin: 0 auto;
padding-top:20px

`
export const Container = styled.div ` 
border-width: 2px;
border-style: solid;
border-color: red;
box-shadow: 20px;
border-radius:20px;
box-shadow: 3px 3px 3px #ffff;
&:hover {
  border-color: #1cbca6;
}
`

export const ImagemPerfil = styled.img `
width: 400px;
height: 480px;
display: block;
border-radius:20px;
z-index: 1;


`
export const Informacoes = styled.div ` 
position:absolute;
top:70vh;
margin-left:20px;
z-index: 1;
`
export const Texto = styled.p ` 

color: white;
text-shadow: 2px 2px 2px black;`
export const Bio = styled.p `
width: 90%;
color: white;
font-size: 80%;
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
export const ImgContainer = styled.div `
display:flex;
justify-content: space-evenly;
padding: 10px 0 10px 0;

`
export const Img = styled.img `
width: 50px;
height: 50px;
margin: 0 auto;
padding:10px;
border-radius: 20%;
cursor: pointer;
border: 1px solid black;
display:flex;
justify-content: center;
align-items: center;
background-color: white;
:hover {
  background-color:black;  
}
`
export const ImgConfig = styled.div `
width: 50px;
height: 50px;
cursor: pointer;

`
export const ContainerMatches = styled.div `
display:flex;
justify-content:left;
align-items:center;
margin: 2vh 2vh;
padding-bottom:20px;
border-bottom: 1px solid white;

`
export const ButtonClear = styled.div`
margin:3vh 3vh;
display:flex;
justify-content:center
`
export const ButtonC = styled.button`
width:60%;
height:50%;
background-color: black;
color:#ffff;
border:none;
border-radius: 10px;
box-shadow: 2px 2px 2px #ffff;
&:hover {
  color: black;
background-color: white;
transition: 0.7s; 
 transform: scale(0.9);
}
`
export const ImgClear = styled.img`
border-radius:50%;
display:flex;
justify-content:left;
box-shadow: 2px 2px 2px #ffff;

`
export const NavLine = styled.div`
display:flex;
justify-content:space-evenly;
border-bottom: 1px solid white;
padding-bottom:2vh
`
export const TextoClear = styled.p ` 
color: white;
text-shadow: 2px 2px 2px red;
margin-left:20px;
`

