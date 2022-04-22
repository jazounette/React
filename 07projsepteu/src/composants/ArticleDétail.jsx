import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const ArticleDétail = () => {
    const titre = useSelector(state => state.titre)
    const article = useSelector(state => state.article)
    const id = useSelector(state => state.id)
    var [vueNum, setVueNum] = useState();

    const dispatch = useDispatch();
    const ChangeVue = () => {
        dispatch({  type: "VUE",   payload: vueNum   })
    }

    function quikaclick (){
        vueNum = 1;
        ChangeVue();
    }

    return (
        <div>
            <h3>{id} - {titre}</h3>
            <p>{article}</p>
            <button onClick={quikaclick}>Retour</button>
        </div>
    );
};

export default ArticleDétail;