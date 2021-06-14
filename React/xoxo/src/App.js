import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      square: Array(9).fill(null),
      count : 0
    }
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
  }

isWinner = () => {
  let s = (this.state.count % 2 === 0) ? "X" : "O";
  for (let i = 0; i < 8; i++) {
    let line = this.winnerLine[i];
    if (this.state.square[line[0]] === s 
      && this.state.square[line[2]] === s) {
        console.log(s + "Win");
      }
  }
}

clickHandler = event => {
  console.log();
  let data = event.target.getAttribute("data")
  let currentSquare = this.state.square;
  if (currentSquare[data] === null) {
  currentSquare[data] = (this.state.count % 2 === 0) ? "X" : "O";
  this.setState({ count: this.state.count + 1 });
  this.setState({ square: currentSquare });
} else {
  console.log("Nope");
}
this.isWinner();
}

render() {
  return (
    <div className = "tic">
      <div className = "grid" onClick={this.clickHandler} data = "0">
      {this.state.square[0]}</div>
      <div className = "grid" onClick={this.clickHandler} data = "1">
      {this.state.square[1]}</div>
      <div className = "grid" onClick={this.clickHandler} data = "2">
      {this.state.square[2]}</div>
      <div className = "grid" onClick={this.clickHandler} data = "3">
      {this.state.square[3]}</div>
      <div className = "grid" onClick={this.clickHandler} data = "4">
      {this.state.square[4]}</div>
      <div className = "grid" onClick={this.clickHandler} data = "5">
      {this.state.square[5]}</div>
      <div className = "grid" onClick={this.clickHandler} data = "6">
      {this.state.square[6]}</div>
      <div className = "grid" onClick={this.clickHandler} data = "7">
      {this.state.square[7]}</div>
      <div className = "grid" onClick={this.clickHandler} data = "8">
      {this.state.square[8]}</div>

    </div>
  )
}
}

export default App;
