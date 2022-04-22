import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const MenuDuJour = () => {
    const dispatch = useDispatch();
    function quikaclick(){  dispatch(  {type:"VUE",  payload:1} )   }
    return (
        <div className='container-fluid menu'>
            <div className='row'>
                <div className='logreact col-1'><img src="logo192.png" className="App-logo" alt="logo"/></div>
                <div className='col-2 offset-2' onClick={quikaclick}><NavLink to ="/maison"><div className='lienmenu'>ACCUEIL</div></NavLink></div>
                <div className='col-2'><NavLink to ="/nouvart"><div className='lienmenu'>ÉCRIRE</div></NavLink></div>
                <div className='col-2'><NavLink to ="/contact"><div className='lienmenu'>CONTACT</div></NavLink></div>
            </div>
        </div>
    );
};

export default MenuDuJour;