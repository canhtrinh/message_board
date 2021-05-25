import React from 'react';
import "./header.css";
import logo from "./logo.svg";

const Header = () => (
    <div className="header">
        <header className="">
            <img src={logo} className="app-logo" alt="logo" />
        </header>
        <p>Message Board forked from Create React App</p>
    </div>
);

export default Header;