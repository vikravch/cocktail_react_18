import './App.css';
import React, {Component} from 'react';
import Router from "./general/navigation/router";
import Navigation from "./general/navigation/Navigation";
import AppContextWrapper from "./general/context/AppContextWrapper";

class App extends Component {
    render() {
        return (
            <AppContextWrapper>
                <Navigation/>
                <Router/>
            </AppContextWrapper>
        );
    }
}
export default App;
