import './Rate.css';
import React from 'react';
import Calc from '../Calc/Calc.js';

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "date" : "",
      "currencyRate" : {}
    }
    this.currency = ["USD", "MDL", "CAD", "RUB"]
    this.getRate();
  }

  getRate = () => {
    fetch("http://api.exchangeratesapi.io/v1/latest?access_key=585a0ff2508bc0ab937d8cefd08d04dd")
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({date: data.date})
        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]];
        }
        this.setState({currencyRate: result});
      });
  }

  render() {
    return (
      <div className="rate">
        <h3>Exchange Currency {this.state.date}</h3>
        <div className="flexContainer">
          {Object.keys(this.state.currencyRate).map((keyName)=>
            <div className="blockFlexItem">
            <div className="currencyName">{keyName}</div>
            <div className="currencyIn">{this.state.currencyRate[keyName]
            .toFixed(2)}</div>
            <div className="currencyOut">Price for 1 euro.</div>
          </div>
          )}
        </div>
        <Calc rate={this.state.currencyRate}/>
      </div>
    );
  };
};

export default Rate;
