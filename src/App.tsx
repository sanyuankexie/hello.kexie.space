import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'

import FloatMenu from "./component/FloatMenu/FloatMenu";
import Welcome from "./pages/Welcome/Welcome";
import Footer from "./component/Footer/Footer";
import './App.css'
import Article from "./pages/Article/Article";


class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <FloatMenu/>
                    <Switch>
                        <Route path="/mp" component={Article}/>
                        <Route path="/" component={Welcome}/>
                    </Switch>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;