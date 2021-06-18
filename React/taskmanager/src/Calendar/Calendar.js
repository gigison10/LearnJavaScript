import './Calendar.css';
import React from 'react';
import Taskadd from '../Taskadd/Taskadd';

class Calendar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     inputAll : []
  //   }
  // }

  render() {
    return (
      <div className="calendar">
        <form className="calForm" onSubmit={this.getInput}>
          <input type="submit" className="today" value="Today"/>
          <input type="submit" className="tomorrow" value="Tomorrow"/>
        </form>
       
        <Taskadd />
      </div>
    );
  };
};

export default Calendar;
