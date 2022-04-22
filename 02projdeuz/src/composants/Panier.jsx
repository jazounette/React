import React, { useState } from 'react';
import { useState, useEffect} from 'react';
import './cady.style.css';

const Cady = ({cady, updateCady}) => {
    const [isOpen, setIsOpen] = useState(false);
    const Total = cady.reduce((acc,cours)=> acc + cours.amout * cours.price);

    useEffect(()=>{document.title=`Panier: ${Total}€`}, [Total])

    return isOpen ? (
        <div className='relative'>
            <div className="cady-liste over">

                { cady.length > 0 ?  //////////////ternaire partie 1
                    <div>
                        <h2>Panier</h2>
                        <div className="inner-card">
                            {/* liste des formations du panier */}
                            <div>
                                {cady.map(({name, price, amount}, index)=>(
                                    <div key={`${name} - ${index}`}>{name} : {price}€ x {amout}<hr/></div>
                                ))}

                            </div>
                            <h3>Total: {Total}€</h3>

                            {/* méthode pour calculer le montant du panier */}

                        </div>
                        <button className='btn btn-primary' onClick={()=>updateCady([])}>Vider le panier</button>
                    </div> : ///////////////////ternaire partie 2
                    <div className='vide'>Votre panier est vide</div>
                  
                }


              </div>
        </div>
    ) : (<button className='btn btn-secondary' onClick={()=>setIsOpen(true)}>Ouvrir le panier</button>);
};

export default Cady;