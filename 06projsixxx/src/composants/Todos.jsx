import React, { Component } from 'react';


class Todos extends Component {
    constructor (props){
        super (props)
        this.state = { latache: "",
        trucafaire: ['Faire un marathon', "Travailler à l'extérieur", 'Faire un tour au parc', 'Manger des frites' ] }
    }
   
    Ajouter(){
        console.log (this.state.latache);
        this.setState(prevState => ({  trucafaire: [...prevState.trucafaire, this.state.latache]  }))
    }
    Supprimer(e){
        console.log (e.target.id);
        // this.state.trucafaire.splice(1,1);
        var index = Number(e.target.id);
        this.setState({
            trucafaire: this.state.trucafaire.filter((_, i) => i !== index)
          });
    }
    
    AffListe(){
        // var trucafaire = ['Faire un marathon', "Travailler à l'extérieur", 'Faire un tour au parc', 'Manger des frites' ];
        // var trucafaire = { rouge: 'Faire un marathon' };
        return ( 
            <div>{ this.state.trucafaire.map((val, clé) => 
                <div className='container' id={clé}>
                    <div className='row mt-2 '>
                    <div className='col-2'>{clé}</div>
                    <div className='col-8'>{val}</div>
                    <div className='col-2'><button id={clé} className='btn btn-danger' onClick={this.Supprimer.bind(this)}>Delete</button></div>
                    </div>
                </div>)
            }</div>
         )
    }

    GérageNomChange(e){  this.setState({latache: e.target.value})  }

    render() {
        return (
            <div>
                <div className='container-fluid'><div className='row'>
                <div className='col-10'>
                    <input className='form-control' type="texte" placeholder='Saississez vos tâches' value={this.state.latache} onChange={this.GérageNomChange.bind(this)}/>
                </div>
                <div className="col-2">
                    <button className='btn btn-light' onClick={this.Ajouter.bind(this)}>Ajouter</button>
                </div>
                </div></div>
                {this.AffListe()}
            </div>
        );
    }
}

export default Todos;