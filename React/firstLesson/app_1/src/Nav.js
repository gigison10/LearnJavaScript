import React from "react";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Navigation",
            subtittle: "Main Menu",
            show: "show"
        }
    }
    myInput = (e) => {
        console.log(e.target.value);
        this.setState({text: e.target.value})
    }
    showNav = () => {
        this.setState({ show: "hide" })
    }
    render() {
        let nav = this.props.nav
        return (
            <nav>
                <div>
                    <form>
                        <input onChange={this.myInput} />
                        <p>{this.state.text}</p>
                    </form>
                </div>
                <button type="button" onClick={this.showNav}>Show Menu</button>
                <h1>{this.state.title}</h1>
                <h1>{this.state.subtittle}</h1>
                <p>{this.state.show}</p>
                <ul >
                    {Object.keys(nav).map(items => {
                        return <li><a href="{nav[items]}"> {items} </a></li>
                    })}
                </ul>
            </nav>
        )
    }
}
export default Nav;