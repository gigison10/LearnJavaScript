import './Footer.css';
import React from 'react';

class Footer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <footer className="footer">
      <div className="footerButtom">
        <div className="container">
          <div className="flexContainer">
            <div className="flexItem">
              <h1 className="footerTittle"><a href="https://itgid.info">
                2019 &copy; React. Lite Level</a></h1>
                <p>All Rights Reserved</p>
            </div>
            <div className="flexItem">
              <div className="moduleBody">
                <ul className="listUnlisted">
                  <li><a href="/sitemap/" 
                  tooltip="Site Map">Site Map</a></li>
                  <li><a href="/sitemaps.xml" target="_blank"
                  tooltip="Google Sitemap">Google Sitemap</a></li>
                </ul>
              </div>
            </div>
            <div className="flexItem">
              <div className="moduleBody">
                <ul className="listUnlisted">
                  {/* <li><a href="#" tooltip="contacts">Contacts</a></li>
                  <li><a href="#" >Warranty</a></li>
                  <li><a href="#" >About Service</a></li>
                  <li><a href="#" >Return Rules</a></li>
                  <li><a href="#" >Agreements of Service</a></li> */}
                </ul>
              </div>
            </div>  
          </div>
        </div>
      </div>

      <div className="copyrightBar">
        <div className="fexContainer">
          <div className="flexItem">
            <ul className="link"></ul>
          </div>
          <div className="flexItem">
            <ul className="link">??????Nu am copiet</ul>
          </div>
        </div>
      </div>

    </footer>
    );
  };
};

export default Footer;
