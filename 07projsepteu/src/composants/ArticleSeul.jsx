import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ArticleSeul = ( {titre, article, id}) => {
    var [vueNum, setVueNum] = useState();

    const dispatch = useDispatch();
    const ChangeVue = () => {
        dispatch({  type: "VUE",  payload: vueNum  })
    }
    const ChangeTitre = () => {
        dispatch({  type: "TITRE",  payload: titre  })
        dispatch({  type: "ARTICLE",  payload: article  })
        dispatch({  type: "ID",  payload: id  })
    }

    function quikaclick (){
        // setVueNum(2);// marche po, sais po pourquoi???
        vueNum = 2;
        ChangeVue(); ChangeTitre();
    }
    
    return (
        <div className='carte'>
            <h3>{id} - {titre}</h3>
            <p>{article}</p>
            <button id={id} onClick={quikaclick}>Lire Article</button>
        </div>
    );
};

export default ArticleSeul;

