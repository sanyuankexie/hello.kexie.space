import { Route, Switch } from 'react-router-dom'
import React from 'react';
import Ball from "./component/Ball/Ball";
import Welcome from "./pages/Welcome/Welcome";
import Footer from "./component/Footer/Footer";
import Article from "./pages/Article/Article";
import { BackTop } from 'antd';

import './App.css'
import BallRoom from './component/BallRoom/BallRoom';

function App() {
    return (
        <div>
            <div>
                <BallRoom/>
                <Switch>
                    <Route path="/introduction/:target" component={Article} />
                    <Route path="/" component={Welcome} />
                </Switch>
                <Footer />
                <BackTop />
            </div>
        </div>
    );
}


export default App;