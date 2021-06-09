
import './App.css';
import Header from "./header/Header";
import Nav from "./Nav.js";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import React from 'react';

class App extends React.Component {
  render() {
    let nav = this.props.nav
    return (
      <div className="App">
        <Header />
        <Nav nav={nav}/>
        <h1>{this.props.tittle}</h1>
        <p>{this.props.hero}</p>
        <Main />
        <Footer />
      </div>
    );
  }
}
export default App;
