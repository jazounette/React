import React from 'react';
import './cate.style.css';

const Category = ({selectActiveCategory, activeCategory, cotegotyList}) => {
    return (
        <div className='category'>
            <select name="category" className='form-select' value={activeCategory} onChange={(e)=> selectActiveCategory(e.target.value)}>
                <option value="">---</option>
                {
                    categotyList.map(
                        (cat)=>(  <option key={cat} value={cat}>{cat}</option>  )
                    )
                }
                <button className='btn btn-secondary' onClick={()=> setActiveCategoty('')}>Recherche</button>
            </select>
            
        </div>
    );
};

export default Category;