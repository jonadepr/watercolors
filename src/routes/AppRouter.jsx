import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { About } from "../pages/about/About";
import { Contact } from "../pages/contact/Contact";
import { HomePage } from "../pages/home/HomePage";
import { Watercolors } from "../pages/watercolors/Watercolors";

export const AppRouter = () => {
    return (
        <Router>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path = "/" component = {HomePage}/>
                    <Route exact path = "/contact" component = {Contact}/>
                    <Route exact path = "/about" component = {About}/>
                    <Route exact path = "/watercolors" component = {Watercolors}/>
                </Switch>
            </div>
        </Router>
    )
}
