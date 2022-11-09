import React from 'react';
import { Button } from '../Button';
// import {MenuItems} from './MenuItems';
import './Navbar.css';

import {Link} from 'react-router-dom';

// TO-DO: Put this in MenuItems.js
const MenuItems = [
    {
        title: "Home",
        url: "",
        cName: "nav-links",
        linkPath: "/"
    },
    {
        title: "Chat Rooms",
        url: "",
        cName: "nav-links",
        linkPath: "/chatrooms"
    },
    {
        title: "Profile",
        url: "",
        cName: "nav-links",
        linkPath: "/profile"
    },
    {
        title: "Sign In",
        url: "",
        cName: "nav-links",
        linkPath: "/signin"
    }
]

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          clicked: false,
        };
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    
    render(){
        return(
            <nav className='NavbarItems'>
                {/* TODO: Change this logo or remove it */}
                <h1 className='navbar-logo'>OnlySwipes<i className='fab fa-react'></i></h1>

                {/* TODO: Add font awesome */}
                <div className='menu-icon' onClick={this.handleClick}>
                     <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu-active' : 'nav-menu'}>
                    {MenuItems.map((item,index) => {
                        return(
                            /*
                            <li key={index}>
                                <a className={item.cName} href = {item.url} >
                                {item.title}
                                </a>
                            </li>
                            */

                            <li>
                                <Link to={item.linkPath} className={item.cName}>
                                    {item.title}
                                </Link>
                            </li>
                            
                        )
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar;