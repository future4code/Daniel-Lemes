import styled from "styled-components"

export const ModTop = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-top: 30px;
  /* align-items: center; */
    width: 100%;
    height: 100%;
    @media screen and (min-width: 200px) and (max-width:766px) {
        flex-direction: column;
        padding-top:5px
       
      }
   
;`


export const ModMid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const Redes = styled.img`
    width: 2vw;
    margin-left: 1vw;
    @media screen and (min-width: 200px) and (max-width:766px) {
        width:5vw
      }
    
`;
export const Logo = styled.img`
    width: 8vw;
    margin: 0 0 0 10px;
    box-shadow: 2px 2px 2px black;
`;

export const ContainerFooter = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 25vh;
    background-color: #8d6ad9;
    background-image: linear-gradient(175deg, #9e82d9 50%, #8d6ad9 70%);
    border-top: 2px solid black;
    @media screen and (min-width: 200px) and (max-width:766px) {
        height:50vh;
      
      
       }
   
`;
export const MainTitle = styled.div`
    text-align: center;
    height: 5vh;
    @media screen and (min-width: 200px) and (max-width:766px) {
       margin-bottom:10vh
       
      }
    
`;
export const TitleH3 = styled.h3`
    font-family: "Merienda";
    font-size: 1.2vw;
    cursor: default;
    @media screen and (min-width: 200px) and (max-width:766px) {
       font-size:8vw;
       
      }
    
`;
export const CopyRigth = styled.p`
    width: 100%;
    text-align: center;
    padding-bottom: 7px;
`;
export const Title = styled.p`
    color: #fff;
    font-size: 0.9vw;
    font-family: "Vidaloka";

    &:hover {
        border-radius: 10px;
        background-color: #8d6ad9;
        transition: 0.7s;
        cursor: pointer;
}
@media screen and (min-width: 200px) and (max-width:766px) {
    font-size:4vw;
   }
`;