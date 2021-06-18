import './Taskadd.css';
import React from 'react';


class Taskadd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAll : []
    }
  }
  
  getInput = (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    let input = elements["input"].value;
    console.log(input);
    this.setState({
      inputAll: [...this.state.inputAll, input]});
  }

  render() {
    return (
      <div className="tasks">
        <div className="addTask">
          <form className="formTask" onSubmit={this.getInput}>
            <input name="input" className="input" type="text" defaultValue="Your Task" />
            <input className="addbtn" type="submit" value="+" />
          </form>
        </div>
        {Object.keys(this.state.inputAll).map((task)=>
          <div className="addedTasks" key={task}>{this.state.inputAll[task]}</div>
        )}
        
      </div>
    );
  };
};
export default Taskadd;


