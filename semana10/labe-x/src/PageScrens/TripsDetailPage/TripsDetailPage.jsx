import React, { useState, useEffect } from "react"
import { BASE_URL } from "../../Utilization/BaseUrl"
import axios from "axios"
import { useHistory, useParams } from "react-router-dom";
import { goToHomePage } from "../../Router/Router";


const TripsDetailPage = () => {
    const [userId, setUserId] = useState({})

    const pathParams = useParams();
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
                console.log("caiu aki no tripDetail agora neh???", response.data)
                setUserId(response.data.trip.candidates)
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    return (
        <div>
{/* 
            { userId.map((item) => {
                console.log(item)
                return (
                    <h3>{item && item.candidates}</h3>
                )
            })
            } */}

        </div>


    )

}
export default TripsDetailPage
