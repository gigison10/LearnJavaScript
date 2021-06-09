import logo from './logo.svg';
import React from "react";
import "./Header.css";

class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              
            </header>
        )
    }
}

export default Header;