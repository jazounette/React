import React from 'react';

const CareScale = ({scaleValue}) => {
    const quantityLabel = {
        1: 'Débutant',
        2: 'Averti',
        3: 'Confirmé',
        4: 'Chevronné',
        5: 'Expert',
    }
    const range = [1,2,3,4,5];
    const scaleType = <img src="./img/Star.png" alt="une belle petiote étoile" height="20px" />;
    return (
        <div onClick={()=>
            alert(`Cette fonctione requiert une niveau ${quantityLabel[scaleValue]}`)
        }>
            {
                range.map((rangeElement) =>
                    scaleValue >= rangeElement ? <span key={rangeElement.toString()}>{scaleType}</span> : null
                )
            }
            
        </div>
    );
};

export default CareScale;