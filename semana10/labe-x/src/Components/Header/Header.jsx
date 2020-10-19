import { NavBar, MenuNavBar, Text,  } from "./styled";
import React from 'react';
import {Animation} from "../Animation/Animation";
import { useHistory } from "react-router-dom";
import { goToAplicationPage, goToCreateTripPage, goToListTripPage, goToLoginPage, goToTripDetailsPage} from "../../Router/Router"


export default function Header(props) {

  
        const history = useHistory();
    
    
    return (
        <NavBar>
            <div>
                <img src={props.image} alt={"imagem"} width={"300px"} />
            </div>
            <MenuNavBar>
                <Text onClick={() => goToListTripPage(history)}><strong>{props.nameTrip}</strong>
                
                </Text>
                <Text onClick={() => goToCreateTripPage(history)}><strong>{props.nameUp}</strong>
                 
                </Text>
                <Text onClick={() => goToLoginPage(history)}><strong>{props.nameIn}</strong>
                
                </Text>
                <Text onClick={() => goToTripDetailsPage(history)}><strong>{props.details}</strong>
                  
                </Text>
                <Text onClick={() => goToAplicationPage(history)}><strong>{props.aplication}</strong>
               
                </Text>
            </MenuNavBar>

        </NavBar>
    );
}
