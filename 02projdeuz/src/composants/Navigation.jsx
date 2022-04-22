import React from 'react';
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';
import Maison from '../../lesvues/Maison/Maison'
import About from '../../lesvues/About/About'

const Navigation = () => {
    return (
        <div className='navigation'>
            <BrowserRouter>
                <button className='bouton'>
                    <Link to="/">KICLICK</Link>
                </button>
                <button className='bouton'>
                    <Link to="/about">KACLOQUE</Link>
                </button>
                <Routes>
                    <Route path='/' element={<Maison/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
            </BrowserRouter>
            <Outlet className='container'/>
        </div>
    );
};

export default Navigation;