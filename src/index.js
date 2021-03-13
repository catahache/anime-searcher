import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Vistos from "./components/Pages/Vistos-page";
import Wishlist from "./components/Pages/Wishlist-page";
import SingleAnime from "./components/Pages/SingleAnime-page";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/vistas" component={Vistos} />
            <Route path="/wishlist" component={Wishlist} />
            <Route path="/anime/:id" component={SingleAnime} />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
