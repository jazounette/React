import React from 'react';
import CareScale from '../CareScale/CareScale';
import './carte.form.style.css';

const CarteFormazione = (cours, index) => {
    console.log(cours.name);
    return (
        <div className='card' key={index}>
            <div className="card-title">
                {cours.name}

            </div>
            <div>
                <img src={cours.logo} alt="Le logo de la formation" />
            </div>
            <div className="categorie">
                <span>Catégorie: </span>{cours.category}
            </div>
            <div className="dificultage">
                <span>Difficulté: </span>
                <CareScale scaleValue={cours.difficulte} className="stars"/>
            </div>
            <div className="prix">
                <span>Combien ça coûte: </span><b>{cours.price}€</b>
            </div>
        </div>
    );
};

export default CarteFormazione;