import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Maison extends Component {
    render() {
        return (
            <div className='col-9 centre'>
                je suis la vue MAISON

                <div className="jumbotron">
                    <h1 className="display-4">BIENVENUE!</h1>
                    <p className="lead">Cette application va vous permettre de mieux vous organiser en créant des tâches. Vous aurez la possibilité de supprimer des tâches si vous le souhaitez</p>
                    <hr className="my-4"/>
                    <p>À vous de jouer!!</p>
                    <p className="lead">
                    <NavLink to ="/todolist"><button className="btn btn-primary btn-lg">Go</button></NavLink>
                    </p>
                </div>




            </div>
        );
    }
}

export default Maison;