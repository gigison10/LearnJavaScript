import './App.css';
import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Header/Header.js';
import Nav from './Nav/Nav.js';
import Footer from './Footer/Footer.js';
import Rate from './Rate/Rate.js';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <div className="container">
          
          <main>
            <Rate />
          </main>

          <div className="container" id="cookieInfo">
            <div className="siteContent">
              <div className="well">On our site we use cookies for technical analitycs.
                <br></br>For the stable working of site we analise your
                IP-addres from your region.<button className="btn-primary">OK</button>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
};

export default App;
