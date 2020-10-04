import styled from "styled-components"

export const Header = styled.div`
   height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    `
export const Section = styled.section`
    display: flex;
    justify-content: space-evenly;
    min-height: 10vh;
    @media screen and (min-width: 200px) and (max-width:766px) {
      flex-wrap:wrap;
       
        text-align:center
      }
      
    `
    export const Semana = styled.div`
    border: 1px dotted rgb(53, 53, 53);
    width: 14%;
    text-align: center;
    margin:0 20px;
    @media screen and (min-width: 200px) and (max-width:766px) {
        min-width: 50%
      }
   
    `
    export const Domingo = styled.div`
    
    `
    export const Segunda = styled.div`
    
    `
    export const Terca = styled.div`
    
    `
    export const Quarta = styled.div`
    
    `
    export const Quinta = styled.div`
    
    `
    export const Sexta = styled.div`
    
    `
    export const Sabado = styled.div`

    `
    export const AnimationStyle = styled.p`
    display:flex;
   justify-content:space-evenly;
    `
    export const Button = styled.button`
   
    `
