import './Nav.css';
import React from 'react';

class Nav extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="headerNav">
        <div className="container">
          <nav>
            <ul>
              {/* <li><a href="#">Home</a></li>
              <li><a href="#">Exchange Point</a></li>
              <li><a href="#">Concacts</a></li> */}
            </ul>
          </nav>
        </div>
      </div>
    );
  };
};

export default Nav;
