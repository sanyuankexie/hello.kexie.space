import React, {Component} from 'react';

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
                    {/*<Article/>*/}
                    <Welcome/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;