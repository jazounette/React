import React from 'react';

const Contact = () => {
    return (
        <div className='row mt-4'>
            <div className="col-6 offset-3">
                <ul className="list-group">
                <li className="list-group-item active text-center">CONTACTEZ-NOUS</li>
                <li className="list-group-item">Par mail: blogreact@gmail.com</li>
                <li className="list-group-item">Par téléphone: 12.34.56.78.90</li>
                <li className="list-group-item">Rejoinez-nous sur les réseaux
                    <ul>
                        <li key="1">Facebook</li>
                        <li key="2">Twitter</li>
                        <li key="3">Youtube</li>
                    </ul>
                </li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;
