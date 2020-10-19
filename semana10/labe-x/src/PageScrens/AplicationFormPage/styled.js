import LOGO from "../../IMG/logoBody.jpg"
import Back from "../../IMG/fundo.jpg"

 import styled from "styled-components"

export const Area = styled.body` 
display:flex;
justify-content:center;
background-image: url(${LOGO});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
height:100vh
`
export const FormControl = styled.form`
display:flex;
align-items:center
`
export const Fieldset = styled.fieldset`
display:flex;
justify-content:center;
align-items:start;
width:80vw;
height:60vh;
border:2px solid black;
background-image: url(${Back});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
color:#ffff
    
   
`
export const Legend = styled.legend`
font-size:5vw;
margin:0px 20vw;
padding:0 1vw;
text-shadow:2px 2px 2px red
`
export const Label = styled.label`

`
export const Input = styled.input`
padding-left:20px;
text-align:center;
margin:2vh 0
  `
  export const Input1 = styled.input`
  text-align:center;
  margin-bottom:2vh 

  ` 
  export const Container = styled.div` 
  display:flex;
  flex-direction:column;
  margin: 0 80px
  `
  export const Text = styled.p`
cursor:pointer
  `
  export const Select = styled.select`
  margin-bottom:2vh
  `
  export const Botao = styled.button`
  margin: 0 auto ;
  margin-top:5vh;
  border:none

  `