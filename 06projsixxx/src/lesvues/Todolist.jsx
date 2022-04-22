import React, { Component } from 'react';
import Todos from '../composants/Todos';

class todolist extends Component {
    render() {
        return (
            <div className='col-9 centre'>
                {/* je suis la vue TODOLIST */}
                <h1>LISTE DES TÂCHES</h1>
                <Todos/>
            </div>
        );
    }
}

export default todolist;