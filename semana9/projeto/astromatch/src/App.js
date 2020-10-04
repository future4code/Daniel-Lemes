import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Cards from "./components/NAVBAR/Cards"
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
    
  useEffect(() => {
    getTrips();
  }, []);
  const getTrips = () => {
    axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel/trips", {
        })
        .then((response) => {
            console.log(response.data)
            
          
        })
        .catch((erro) => {
            console.log(erro);
        });
};


  return (
    <div>
      {getTrips}
      <ContainerPrincipal className="App">
  {renderize()}
    </ContainerPrincipal>
    </div>
    
  );
}
export default App;