import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className='col-12 entete'>
                <p>
                    {/* je suis le composant HEADER */}
                    <img src="logo192.png" className="App-logo" alt="logo"/>
                    {/* <img className="imagelogo" src="logo192.png" alt="totobiloute" /> */}
                    <span className='lienheader'><NavLink to ="/">Maison </NavLink></span>
                    <span className='lienheader'><NavLink to ="/todolist"> Liste des tâches </NavLink></span>
                    <span className='lienheader'><NavLink to ="/about"> About</NavLink></span>
                </p>
            </div>
        );
    }
}

export default Header;