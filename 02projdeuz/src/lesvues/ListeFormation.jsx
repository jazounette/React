import React from 'react';
import {useState} from 'react';
import CarteFormazione from '../../composants/CarteFormazionne/CarteFormazione';
import Category from '../../composants/Category/Category';
import { coursList } from '../../datas/CoursList';
import './listeform.style.css';

const ListeFormation = () => {
    const [activeCategory, selectActiveCategory]= useState('');

    const cotegotyList = coursList.reduce(
        (acc, elem)=>
            acc.includes(elem.category) ? acc : acc.concat(elem.category),
            []
    )

    AddToCady = (name, price) => {
        const formationAdded = cady.find((cours) => cours.name === name);
        if (formationAdded){
            const filtreredCart = cady.filter((cours) => cours.name !== name)
            updateCady([...filtreredCart, {name, price, amount: formationAdded.amount + 1}])
        } else {
            updateCady([...cady, {name, price, amount: 1}])
        }
        alert(`La formation ${name} a été ajouté !`);
    }

    return (
        <div className='formation-list'>
            <h2>Nos Formations</h2>
            <div className="row">
                <div className="col-8">
                    <Category categoryList = {cotegotyList} selectActiveCategory = {set} />

                </div>
                <div className="col-4">
                    <Cady  />

                </div>
            </div>
            <div className="card-container">
                {coursList.map((cours, index)=>
                    <div key={index} onClick={()=>AddToCady(cours.name, cours.price)}>
                        <CarteFormazione 
                            nom={cours.name}
                            logo={cours.logo}
                            catégorie={cours.category}
                            diffizil={cours.difficulte}
                            prix={cours.price}
                            index={index}/>

                    </div>
                )}
            </div>
        </div>
    );
};

export default ListeFormation;