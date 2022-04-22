import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const MenuDuJour = () => {
    const dispatch = useDispatch();
    function quikaclick(){
         dispatch({  type: "VUE",  payload: 1  })
    
    }
    return (
        <div className='menu'>
            <div className='logreact'><img src="logo192.png" className="App-logo" alt="logo"/></div>
            <div className='lienmenu' onClick={quikaclick}><NavLink to ="/maison">ACCUEIL</NavLink></div>
            <div className='lienmenu'><NavLink to ="/nouvart">ÉCRIRE</NavLink></div>
            <div className='lienmenu'><NavLink to ="/contact">CONTACT</NavLink></div>
        </div>
    );
};

export default MenuDuJour;