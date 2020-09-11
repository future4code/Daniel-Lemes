import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Cards from "./components/NavBar/Cards"
import Matches from "./components/Matches"
const ContainerPrincipal = styled.div ` 
background-color: grey;
display:flex;
justify-content:center;
align-items:center;
min-height: 100vh;`
function App(props) {
  const [pageRender, setPageRender] = useState("Cards")
 const  onClickMatches = () => {
    setPageRender("Matches")
  };
  const onClickCards = () => {
    setPageRender("Cards")
  };
  const renderize = () => {
    if(pageRender === "Cards"){
      return ( <Cards 
        Add={onClickMatches}/>);}
      else if(pageRender ==="Matches"){
        return <Matches 
        back={onClickCards}/>;
      }
  }
  return (
    <ContainerPrincipal className="App">
  {renderize()}
    </ContainerPrincipal>
  );
}
export default App;