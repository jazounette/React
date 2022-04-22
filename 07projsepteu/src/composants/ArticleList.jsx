import React from 'react';
import ArticleSeul from './ArticleSeul';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const ArticleList = () => {
    const articles = useSelector(state => state.articlez)

    return (
        <div>
            <h3>TOUS LES ARTICLES</h3>
            {articles.map((val, key) => <ArticleSeul key={key} titre={val.titre} article={val.article} id={key}/> )}
        </div>
    );
};

export default ArticleList;