import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";


const Maison = () => {
    const titotable = [
        {nom: "géronimo", prénom: "chamousse", courriel: "gem.cham@free.fr", tel: "01234567"},
        {nom: "degaule", prénom: "charle", courriel: "charl.dg02@hotmail.com", tel: "98765432"},
        {nom: "lepetit", prénom: "bernardo", courriel: "beber@caramail.net", tel: "96385271"},
        {nom: "legrand", prénom: "zorro", courriel: "zorro@gmail.com", tel: "14725836"}];
    
    const [nom, setNom] = useState();

    function handleClick() {    titotable["nom"].push(nom);  }

    return (
        <div className='toto'>
            <table>
            { titotable.map(prout => {return (
                <tr>
                <td>{prout.nom}</td>
                <td>{prout.prénom}</td>
                <td>{prout.courriel}</td>
                <td>{prout.tel}</td>
                </tr>
            )})}
            </table>
            <FontAwesomeIcon icon={faHome} style={{ color: 'rgb(40, 44, 52)',fontSize:'25px' }} />
            <input type="text" name="nouvnom" id="nouvnom" onChange={(e) => setNom(e.target.value)}/>
            <button onClick={handleClick}>totooooobiloute</button>
        </div>
    );
};

export default Maison;