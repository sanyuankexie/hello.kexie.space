import { Route, Switch } from 'react-router-dom'
import React from 'react';
import Welcome from "./pages/Welcome";
import Footer from "./component/Footer";
import Article from "./pages/Article";

import './App.css'
import BallRoom from './component/BallRoom';
import GithubAuth from './pages/GithubAuth';
import MusicPlayer from './pages/MusicPlayer';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import appReducer from './store/AReducer';

const store = createStore(appReducer);

function App() {
    return (
        <div>
            <Provider store={store}>
                <div>
                    <BallRoom />
                    <Switch>
                        <Route path="/introduction/:target" component={Article} />
                        <Route path="/music" component={MusicPlayer} />
                        <Route path="/github-auth" component={GithubAuth} />
                        <Route path="/" component={Welcome} />
                    </Switch>
                    <Footer />
                </div>
            </Provider>

        </div>
    );
}


export default App;
