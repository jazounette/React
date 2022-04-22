import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navside extends Component {
    render() {
        return (
            <div className='col-3 barlat'>
                <p>
                    {/* je suis le composant NAVSIDE<br/> */}
                    <h3 className=''>ACCUEIL</h3>
                    <div className="lienside">
                        <NavLink to ="/">Maison</NavLink><br/>
                        <NavLink to ="/todolist">Liste des tâches</NavLink>
                    </div>
                </p>
            </div>
        );
    }
}

export default Navside;