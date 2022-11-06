import React from 'react';
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
        title: "Title 2",
        url: "",
        cName: "nav-links"
    },
    {
        title: "Title 3",
        url: "",
        cName: "nav-links"
    },
    {
        title: "Title 4",
        url: "",
        cName: "nav-links"
    },
    {
        title: "Title 5",
        url: "",
        cName: "nav-links"
    }
]

class Navbar extends React.Component {
    render(){
        return(
            <nav className='NavbarItems'>
                
                {/* <h1 className='navbar-logo'>React</h1> import React logo*/}

                <div className='menu-icon'>
                     
                </div>
                <ul>
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

            </nav>
        );
    }

}

export default Navbar;