import React, {Component} from 'react';

import Welcome from "./pages/Welcome/Welcome";
import './App.css'
import Footer from "./component/Footer/Footer";

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Welcome/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;