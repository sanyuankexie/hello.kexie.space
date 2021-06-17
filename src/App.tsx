import { Route, Switch } from 'react-router-dom'
import React from 'react';
import Ball from "./component/Ball";
import Welcome from "./pages/Welcome";
import Footer from "./component/Footer";
import Article from "./pages/Article";
import { BackTop } from 'antd';

import './App.css'
import BallRoom from './component/BallRoom';
import GithubAuth from './pages/GithubAuth';

function App() {
    return (
        <div>
            <div>
                <BallRoom/>
                <Switch>
                    <Route path="/introduction/:target" component={Article} />
                    <Route path="/github-auth" component={GithubAuth} />
                    <Route path="/" component={Welcome} />
                </Switch>
                <Footer />
            </div>
        </div>
    );
}


export default App;