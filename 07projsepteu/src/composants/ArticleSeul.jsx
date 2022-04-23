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
    <div className='col-3'>
        <div className="card mb-3">
            <div className="card-header carteT">{id} - {titre}</div>
            <div className="card-body">
                <p className="card-text carteP">{article}</p>
                <a id={id} onClick={quikaclick} className="btn btn-primary">Lire</a>
            </div>
        </div>
    </div>
    );
};

export default ArticleSeul;

