import './Calc.css';
import React from 'react';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result : "0"
    }
  }


  static getDerivedStateFromProps(props, state) {
    return {rate: props.rate}
  }

  calcRate = (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    let countCurrency = elements["countCurrency"].value;
    let typeCurrency = elements["typeCurrency"].value;
    this.setState({result: (countCurrency / this.state.rate[typeCurrency]).toFixed(2)})
  }


  render() {
    return (
      <div className="calc">
        <h3>Exchange Calculator</h3>
        <div className="block">
          <div>I want</div>
          <div>
            <form onSubmit={this.calcRate}>
            <input type="number" defaultValue="150" name="countCurrency"/>
            <select name="typeCurrency" id="">
              {Object.keys(this.props.rate).map((keyName)=>
                (<option key={keyName} value={keyName}>{keyName}</option>)
              )}
            </select>
            <input type="submit" defaultValue="Calc" />
            </form>
          </div>

          <div>
            <h4>Result</h4>
            <ul className="calcRes">
              <li>EUR {this.state.result}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
};

export default Calc;
