import React, { Component } from 'react';
import './App.css';
import FooterPage from './components/footer/footer.jsx';
import NavbarPage from './components/header/header.jsx';
import HomePage from './components/home/home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return ( 
            <div className="App">
                <NavbarPage/>
                <HomePage/>
                <FooterPage />
            </div>                
        );
    }
}

export default App;