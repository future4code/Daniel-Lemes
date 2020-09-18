import React, {useState} from 'react';
import Header from "../../Components/Header/Header";
import Body from "../../Components/Body/Body";
import Footer from "../../Components/Footer/Footer";
import LOGO from "../../IMG/LOGO.png";
import axios from "axios";
import { AnimationSignUp } from "../../Components/Animation/AnimationSignUp"

export default function Home(props) {

  

  return (
    <div>
  
    <Header image={LOGO}
            nameTrip={"Trips" } 
            nameUp={"travel registration"}
            nameIn={<AnimationSignUp />}
            details={"Details"}
            aplication={"Aplication"} />
             
            <div />
            <Body />
            <Footer />
    </div>
  );
}
