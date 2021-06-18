import './App.css';
import React from 'react';
// import Taskadd from './Taskadd/Taskadd';
import Calendar from './Calendar/Calendar';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     input: ""
  //   }
  // }


  render() {
    return (
      <div className="App">
        <header>
          <h1>Task Manager</h1>
        </header>
        <div className="taskManager">
          <Calendar />
          {/* <Taskadd /> */}
         

        </div>
      </div>
    );
  };
};

export default App;
