// const nom = "Tony la Fritte";
// const identifiant = {  pseudo :"mimille", motdepasse : "toto"  };
// const elementHTML = <h2>Bonjour, {nom}</h2>;

// const resultat = document.getElementById("appD");
// const bouttonD = document.getElementById("boutD");


// function Header(){
//     return (
//         <div className="chapitoto">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMhzHyzjHhP7frg5hO_jbH2eTc3XzQpzRTtXZZeTqYgSt40cvZY9t6nz-rccu7b2TEh4"></img>
//             <h2>M2iFormation</h2>
//         </div>
//     )
// }

function DivBleue(){  return ( <div className="bleue">bleue</div> ) }
function DivRouge(){  return ( <div className="rouge">rouge</div> ) }
function DivVerte(){  return ( <div className="verte">verte</div> ) }
function DivJaune(){  return ( <div className="jaune">jaune</div> ) }

function Citron(){
    return (
        <div className="container">
        <div className="row">
            <div className="col-12"><DivRouge/></div>
            <div className="col-2"><DivBleue/></div>
        
            <div className="col-8 pad1">
                <div className="row">
                    <div className="col-3 pad1"><DivVerte/></div>
                    <div className="col-3 pad1"><DivVerte/></div>
                    <div className="col-3 pad1"><DivVerte/></div>
                    <div className="col-3 pad1"><DivVerte/></div>
                    <div className="col-12 pad1"><DivJaune/></div>
                </div>
            </div>
            <div className="col-2"><DivBleue/></div>
        </div>
        </div>
    )
}

ReactDOM.render(<React.Fragment><Citron/></React.Fragment>, document.getElementById("app"));


// function Bannane(){
//     return(
//         <div className="bannane">
//             <Header/>
//             <div className="description">
//                 <Description/>
//             </div>
//         </div>
//     )
// }

// ReactDOM.render(<Header><Description></Description></Header>, document.getElementById("app"));



// bouttonD.addEventListener('click', (event)=>{ alert(`fonction fl??ch??, this => ${this} source de l'??v??nement: ${event}`);  })
// bouttonD.addEventListener('click', function() { console.log(`fonction classique, this => ` + this);  })

// function ClickFonction(){    resultat.innerHTML="oooooooooo";}
// function ClickConfirmm(){
//     let r??ponse = confirm("??tes-vous sur?");
//     (r??ponse === true) ? resultat.innerHTML += "confirmation" : resultat.innerHTML += "NO confirmation";
// }



// function MyComposant(){
//     return (<h3>Bonjooooour, {nom}</h3>)
// }
// function MyComposantB({nom, pr??nom}){
//     return (<h3>Bonjooooour, {nom}  {pr??nom}</h3>)
// }
// function MyComposantC({identifiant}){
//     return (<h3>connexion: {jemeconnex(identifiant)} </h3>)
// }
// function jemeconnex(identifiant){
//     return ("login:" + identifiant.pseudo + " mot de passe:" + identifiant.motdepasse);
// }

// ReactDOM.render(
//     elementHTML,
//     document.getElementById('root')
// );

// ReactDOM.render(<MyComposant/>, document.getElementById('app'));
// ReactDOM.render(<MyComposantB nom="Johnnnny" pr??nom="Guiiiitar"/>, document.getElementById('appB'));
// ReactDOM.render(<MyComposantC identifiant={identifiant}/>, document.getElementById('appC'));


