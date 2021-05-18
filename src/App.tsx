import React, {Component} from 'react';

import FloatMenu from "./component/FloatMenu/FloatMenu";
import Welcome from "./pages/Welcome/Welcome";
import Footer from "./component/Footer/Footer";
import './App.css'


class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <FloatMenu/>
                    <Welcome/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;