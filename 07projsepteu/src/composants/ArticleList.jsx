import React from 'react';
import ArticleSeul from './ArticleSeul';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const ArticleList = () => {
    const articles = useSelector(state => state.articlez)

    return (
        <div className='row'>
            <div className='col-12 text-center p-4'><h3>TOUS LES ARTICLES</h3></div>
            {articles.map((val, key) => <ArticleSeul key={key} titre={val.titre} article={val.article} id={key}/> )}
        </div>
    );
};

export default ArticleList;