import React from 'react';
import { Button } from '../Button';
// import {MenuItems} from './MenuItems';
import './Navbar.css';

// TO-DO: Put this in MenuItems.js
const MenuItems = [
    {
        title: "Home",
        url: "",
        cName: "nav-links"
    },
    {
        title: "Settings",
        url: "",
        cName: "nav-links"
    },
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
                            <li key={index}>
                                <a className={item.cName} href = {item.url} >
                                {item.title}
                                </a>
                            </li>
                            
                        )
                    })}
                </ul>
                {/* TODO: Doesn't align properly */}
                <Button>Sign In</Button>
            </nav>
        );
    }
}

export default Navbar;