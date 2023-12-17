import './App.css';
import React, {Component} from 'react';
import Router from "./general/navigation/router";
import Navigation from "./general/navigation/Navigation";
import AppContextFWrapper from "./general/context/AppContextFWrapper";

function App() {
    return (
        <>
            <Navigation/>
            <Router/>
        </>
    );
}

export default App;
