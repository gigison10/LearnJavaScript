import './Header.css';
import React from 'react';


class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <header>
        <div className="topBar"></div>
        <div className="mainHeader">
          <div className="container">
            <h1 className="siteTittle">Exchange Currency</h1>
          </div>
        </div>
        
      </header>
  );
};
};

export default Header;
