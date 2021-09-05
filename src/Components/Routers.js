import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import TVShow from "../Routes/TVShow";
import Detail from "../Routes/Detail";
import Header from "./Header";

const Routers = () => {
    return(
        <Router>
            <Header></Header>
            <Switch>
                <Route path="/home" exact component={Home}></Route>
                <Route path="/tv" exact component={TVShow}></Route>
                <Route path="/search" exact component={Search}></Route>
                
                <Route path="/tv/:id" exact component={Detail}></Route>
                <Route path="/movie/:id" exact component={Detail}></Route>

                <Redirect from="*" to="/home"></Redirect>
            </Switch>
        </Router>
    )
}

export default Routers;