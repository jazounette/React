import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const NouvArt = () => {
    var [titrexx, setTitre] = useState();
    var [articlexx, setArticle] = useState();
    const articles = useSelector(state => state.articlez)
    
    const dispatch = useDispatch();
    const AddArticle = () => {
        dispatch({  type: "ADDART",  payload: {titre: titrexx, article: articlexx}  })
        dispatch({  type: "VUE",  payload: 1  })
        
        console.log (articles);

        articles.push({titre: titrexx, article: articlexx});
        const myJSON = JSON.stringify(articles);
        localStorage.setItem("articlesJSON", myJSON);

        // ResetStorage();
    }

    function GérageTitreChange(e){  titrexx = e.target.value }
    function GérageArticleChange(e){  articlexx = e.target.value }

    function quikaclick(){
        console.log("click add article - " + titrexx + " - " + articlexx);
        AddArticle();
    }
    return (
        <div>
            <h3>ÉCRIVEZ UN ARTICLE</h3>
            <label htmlFor="titre">Titre</label><br/>
            <input id="titre" placeholder='Le titre de votre article' value={titrexx} onChange={GérageTitreChange}></input><br/>
            <label htmlFor="article">Votre article</label><br/>
            <textarea id="article" placeholder='Tapé votre article ici' value={articlexx} onChange={GérageArticleChange}></textarea><br/>
            <button onClick={quikaclick}><NavLink to ="/maison">Envoyer</NavLink></button>
            
        </div>
    );
};


export default NouvArt;



// function ResetStorage(){
//     const articlez = [ {titre:"react", article: "c'est un framework conçu par facebook"}, 
//                 {titre:"bootstrap", article: "c'est un framework conçu par twitter"},
//                 {titre:"angular", article: "développé par Google et la communauté Angular"},
//                 {titre:"Vue.JS", article: "framework open source crée par Evan You"},
//                 {titre:"Laravel", article: "framework open source en PHP crée par Taylor Otwell"},
//                 {titre:"Symfony", article: "ensemble de composant PHP, créateur: Fabien Potencier (cocorico!!)"},  ]
    
//     const myJSON = JSON.stringify(articlez);
//     localStorage.setItem("articlesJSON", myJSON);
// }
