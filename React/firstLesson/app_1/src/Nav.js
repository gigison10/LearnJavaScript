import React from "react";

class Nav extends React.Component{
    render(){
        let nav = this.props.nav
  return (         
    <nav>
        <ul >
        {Object.keys(nav).map(items => {
            return <li><a href = "{nav[items]}"> {items} </a></li>
        })}
        </ul>
    </nav>
)}s
}
export default Nav;