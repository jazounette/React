import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticleList from './ArticleList';
import ArticleDétail from './ArticleDétail';


const Maison = () => {
    const vue = useSelector(state => state.vue)

    function prout(toto){
        console.log ("maison vue: " + toto);
        if (toto == 1) return <ArticleList/> 
        if (toto == 2) return <ArticleDétail/>
    }

    return (
        <div>
            {/* <h3>je suis le composant maison</h3> */}
            {prout(vue)}
        </div>
    );
};

export default Maison;


