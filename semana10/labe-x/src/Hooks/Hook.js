import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../PageScrens/Home/Home.jsx";
import  AplicationFormPage from "../PageScrens/AplicationFormPage/AplicationFormPage.jsx";
import ListTripPage from "../PageScrens/ListTripPage/ListTripPage.jsx";
import LoginPage from "../PageScrens/LoginPage/LoginPage.jsx";
import TripsDetailPage from "../PageScrens/TripsDetailPage/TripsDetailPage.jsx";
import CreatetripPage from "../PageScrens/CreateTripPage/CreateTripPage.jsx"
function Hook() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        < Home />
                    </Route>
                    <Route exact path="/details">
                        < TripsDetailPage />
                    </Route>
                    <Route exact path="/create">
                        < CreatetripPage />
                    </Route>
                    <Route exact path="/aplication">
                        < AplicationFormPage />
                    </Route>
                    <Route exact path="/list">
                        <ListTripPage />
                    </Route>
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                    <Route>
                        <div>ERROR 404</div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}
export default Hook
