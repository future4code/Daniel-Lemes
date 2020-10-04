import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../pageScrens/loginPage/LoginPage"
import SignUpPage from "../pageScrens/signUpPage/SignUpPage"
import FeedPage from "../pageScrens/feedPage/FeedPage"
import PostPage from "../pageScrens/postPage/PostPage"
export default function Hooks() {
 return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        < LoginPage />
                    </Route>
                    <Route exact path="/signup">
                        < SignUpPage />
                    </Route>
                    <Route exact path="/feed">
                        < FeedPage />
                    </Route>
                    <Route exact path="/post">
                        <PostPage />
                    </Route>
                    <Route>
                        <div>ERROR 404</div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}