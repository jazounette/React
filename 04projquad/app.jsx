// const toto = React.createElement('h1', {}, 'Bounour tout le monde', 'xxooooxxxJean');

const { useEffect } = require("react");

// var prout = {rouge:'rouuuuuge', verte:"veeeeerte", rose:'roooose'};
// var goudal = ['bleuuuue', 'jauuuune', 'mauuuuuuve'];


// const toto = <React.Fragment>
//     <h1 className="toto">Salutxxxx la foule</h1>
//     <ul>
//         {goudal.map((val, key) => <li id={key}>{val}</li>)}
//         <li>{prout.rose}</li>
//         <li>{prout.rouge}</li>
//         <li>{prout.verte}</li>
//     </ul>
// </React.Fragment>;

// ReactDOM.render (toto, document.getElementById('app'));


function Coucou ({quiça, oùça, children}) {
    return <React.Fragment>
        <h1>Coucou C'est Nous!!!</h1>
        <p>({quiça})</p>
        <p>Où ça donc? : ({oùça})</p>
        <p>Avec qui donc? : {children}</p>

    </React.Fragment>;
}

class ClubDo extends React.Component {
    render() {
        return <React.Fragment>
            <h2>Salut les pitits n'enfants</h2>
            <p>C'est moi {this.props.quiça}</p>
            <p>Nous somme aujourd'hui {this.props.oùça} avec nos amis {this.props.children}</p>
        </React.Fragment>
    }
}
ClubDo.defaultProps = {
    quiça: "Dorothé",
    oùça: "dans ma culotte",
    children: "prospère et gargamelle"
}

class ManuelFeurara extends React.Component{
    constructor (props) {
        super (props);
        this.state = {n: props.début} // état du compteur n init à zéro 
    }
    Incrémenter (e) {
        e.preventDefault();
        // console.log(this.state.n);
        // this.state.n = this.state.n + 1;         // mauvaise manière de faire
        // this.setState({n: this.state.n});
        this.setState((state, props) => ({n: state.n + 1}))// bonne manière de faire
    }
    Décrémenter () {
        this.setState((state, props) => ({n: state.n - 1}))
    }
    Initializzz () {
        this.setState((state, props) => ({n: props.début}))
    }
    render () {
        return <React.Fragment>
            <p>valeur: {this.state.n}</p>
            <button onClick={this.Incrémenter.bind(this)}>Incrémenteur</button>
            <button onClick={this.Décrémenter.bind(this)}>Décrémenteur</button>
            <button onClick={this.Initializzz.bind(this)}>Initializeur</button>
        </React.Fragment>
    }
}
ManuelFeurara.defaultProps = {  début: 0  }


function Home({children}) {
    return <React.Fragment>
        <ClubDo>{children}</ClubDo>
        <ClubDo quiça="Chantal" oùça="dans mon short"></ClubDo>
    </React.Fragment>
}

/////////////////////////////////////////////////////////////////////Formulaire (Grafikart/React-06)

class HomeDeux extends React.Component {
    constructor (props){
        super (props)
        this.state = {  nom: 'Jeannot', prénom: 'lapinou', zonage: 'raclette balayette', selec: '', choisi:true  }//déclaration des states du composant
    }
    GérageNomChange(e){  this.setState({nom: e.target.value})  }
    GérageZoneText(e){   this.setState({zonage: e.target.value}), this.setState({prénom: e.target.value})  }
    GérageSelec(e){  this.setState({selec: e.target.value})  }
    GérageChoisiBoite(e){  this.setState({choisi: e.target.checked})  }
    render() {
        return <div>
            <label htmlFor="nom">LE NOM: </label>
            <input type="texte" id="nom" name="nom" value={this.state.nom} onChange={this.GérageNomChange.bind(this)} /><br/>
            <label htmlFor="prénom">LE PRÉNOM: </label>
            <input type="texte" id="prénom" name="prénom" value={this.state.prénom}/><br/>
            <textarea id="textzone" onChange={this.GérageZoneText.bind(this)}></textarea>
            <select value={this.state.selec} onChange={this.GérageSelec.bind(this)}>
                <option value="Démoniste">Warlock</option>
                <option value="Magicien">Mage</option>
                <option value="Prétresse">Priestess</option>
            </select>
            <p>Classe choisi: {this.state.selec}</p>
            <span>Il faut {(this.state.choisi) ? "DÉCOCHER" : "COCHER"} cette case: </span>
            <input type="checkbox" checked={this.state.choisi} onChange={this.GérageChoisiBoite.bind(this)}/>

        </div>
    }
}

// ReactDOM.render (<Coucou quiça="Christophe Deuchattevanne" oùça="Dans ton cartable">Patrick "l'étoile de mer" Carmouze</Coucou>, document.getElementById('app'));
// ReactDOM.render (<ClubDo quiça="Dorothé" oùça="dans ma culotte">Patrick l'étoile de mer et Bod l'éponge</ClubDo>, document.getElementById('app'));
// ReactDOM.render (<Home>Patrick l'étoile de mer et Bod l'éponge</Home>, document.getElementById('app'));
// ReactDOM.render (<ManuelFeurara début={11}/>, document.getElementById('app'));
ReactDOM.render (<HomeDeux/>, document.getElementById('app'))

////////////////////////////////////////////////////////////exercise Mohamed
import {  useState, useEffect  } from "react";

function App(){
    const [data, setdata] = useState();
    const [datb, setdatb] = useState();
    const [datc, setdatc] = useState();

    useEffect(() => {  console.log("tatatototiti")  }  )

    // const changeState = () => ;

    return (
        <div>
            <h1> l'état est de: {data} </h1>
            <button></button>

        </div>
    )

}





