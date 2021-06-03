import { Route, Switch } from 'react-router-dom'

import Menu from "./component/Menu/Menu";
import Welcome from "./pages/Welcome/Welcome";
import Footer from "./component/Footer/Footer";
import './App.css'
import Article from "./pages/Article/Article";
import React from 'react';


function App() {
    return (
        <div>
            <div>
                <Menu />
                <Switch>
                    <Route path="/introduction/:target" component={Article} />
                    <Route path="/" component={Welcome} />
                </Switch>
                <Footer />
            </div>
        </div>
    );
}


export default App;