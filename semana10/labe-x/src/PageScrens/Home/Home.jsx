import React, {useState} from 'react';
import Header from "../../Components/Header/Header";
import Body from "../../Components/Body/Body";
import Footer from "../../Components/Footer/Footer";
import LOGO from "../../IMG/LOGO.png";
import axios from "axios"


export default function Home(props) {

  

  return (
    <div>
  
    <Header image={LOGO}
            nameTrip={"Trips" } 
            nameUp={"Sign up"}
            nameIn={"Sign in"}/>
             
            <div />
            <Body />
            <Footer />
    </div>
  );
}
