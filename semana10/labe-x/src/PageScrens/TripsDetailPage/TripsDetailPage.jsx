import React, { useState, useEffect } from "react"
import { BASE_URL } from "../../Utilization/BaseUrl"
import axios from "axios"
import { useHistory } from "react-router-dom";
import { goToHomePage } from "../../Router/Router";

const TripsDetailPage = () => {
    const [userId, setUserId] = useState("")


    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem("token");

        if (token) {
            getTripDetail();
        } else {
            history.push("/");
        }
    }, [history]);


    const getTripDetail = (id) => {
        axios
            .get(`${BASE_URL}/trip/${id}`, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            })
            .then((response) => {
                console.log("caiu aki nesse???", response.data)
                setUserId(response.data.trips)
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    return (

        <div>
            <button onClick={getTripDetail}>mostrar</button>          
            <p>{getTripDetail}</p>
                     
                


        

            <h1>olaaaaaaaaaaa</h1>
            <button onClick={() => goToHomePage(history)}>voltar</button>
        </div>

    )

}
export default TripsDetailPage
