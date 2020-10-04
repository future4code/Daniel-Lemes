import styled from "styled-components"

   export  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 15vh;
    border-radius:0 0 20px 20px ;
    box-shadow:3px 3px 3px black;
    margin-bottom:3vh;
    @media screen and (min-width: 200px) and (max-width:766px) {
     flex-wrap:wrap

      }
  `;
  
 export  const InputButtons = styled.div`
    display: flex;
    @media screen and (min-width: 200px) and (max-width:766px) {
       flex-wrap:wrap;
justify-content:center;
margin-top:10px;
       }
  
  `;
 export  const Input = styled.input` 
  border-radius:10px;
  
  
  `
  export const Select = styled.select` 
  border-radius:10px;
  margin-left:20px;
  @media screen and (min-width: 200px) and (max-width:766px) {
    margin:none

   }
  
  `









