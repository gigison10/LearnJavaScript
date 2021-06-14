
import './App.css';
// import Header from "./header/Header";
// import Nav from "./Nav.js";
// import Main from "./main/Main";
// import Footer from "./footer/Footer";
import React from 'react';

// import Afcomponent from "./Afcomponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        text: "Hello",
        age: 0
        
    }
}

static getDerivedStateFromProps(props, state) {
  return {text: props.text55}
}


// myInput = (e) => {
//   console.log(e.target.value);
//   this.setState({[e.target.name] : e.target.value});
// }

// submitForm = (e) => {
//   e.preventDefaule();
// }
  render() {
    // let a = "";
    // if (this.state.text == "") {
    //   a = ""
    // } else {
    //   a = <p>Your text: {this.state.text}</p>
    // }
    return (
      <div>
        <p>{this.state.text}</p>
      </div>
      // <div>
      //   <form onSubmit={this.submitForm}>
      //     <input onChange={this.myInput} name = "text"/>
      //     <input onChange={this.myInput} type="number" name = "age"/>
      //     <input type ="submit"/>
      //     {a}
      //     <p>Age: {this.state.age}</p>
      //   </form>
      // </div>
      // <div className="App">
      //   {/* <Header />
      //   <Nav nav={nav}/>
      //   <h1>{this.props.tittle}</h1>
      //   <p>{this.props.hero}</p> */}
      //   {/* <Main /> */}
      //   {/* <Footer /> */}
      // </div>
    );
  }
}
export default App;
