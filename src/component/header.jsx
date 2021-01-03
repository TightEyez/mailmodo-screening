import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Delivery DashBoard</a>
            </nav>
        </React.Fragment> );
    }
}
 
export default Header ;