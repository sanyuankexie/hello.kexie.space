import React, {Component} from 'react';

import Welcome from "./pages/Welcome";
import './App.css'

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Welcome/>
                </div>
            </div>
        );
    }
}

export default App;