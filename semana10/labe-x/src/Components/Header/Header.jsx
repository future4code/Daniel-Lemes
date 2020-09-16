import { NavBar, MenuNavBar, Text,  } from "./styled";
import React from 'react';
import {Animation} from "../Animation/Animation";
import { useHistory } from "react-router-dom";
import { goToListTripPage, goToLoginPage } from "../../Router/Router"


export default function Header(props) {

  
        const history = useHistory();
    
    
    return (
        <NavBar>
            <div>
                <img src={props.image} alt={"imagem"} width={"300px"} />
            </div>
            <MenuNavBar>
                <Text onClick={() => goToListTripPage(history)}><strong>{props.nameTrip}</strong>
                <Animation />
                </Text>
                <Text><strong>{props.nameUp}</strong>
                   <Animation />
                </Text>
                <Text onClick={() => goToLoginPage(history)}><strong>{props.nameIn}</strong>
                   <Animation />
                </Text>
            </MenuNavBar>

        </NavBar>
    );
}
