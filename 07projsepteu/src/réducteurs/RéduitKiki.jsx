const INITIAL_STATE = {
    vue:1,
    id:0,
    titre:"",
    article:"",
    articlez:[]
}

function Grabouilla(state = INITIAL_STATE, action){
    switch(action.type){
        case "VUE" : return { ...state, vue: action.payload  }
        case "ID" : return { ...state, id: action.payload  }
        case "TITRE" : return { ...state, titre: action.payload  }
        case "ARTICLE" : return { ...state, article: action.payload  }
        case "ARTICLEZ" : return { ...state, articlez: action.payload  }
        case "ADDART" : return { ...state, articlez: [...state.articlez, action.payload]  }
        default: { return state }

    }
}

export default Grabouilla


// articlez:[ {titre:"react", article: "c'est un framework conçu par facebook"}, 
// {titre:"bootstrap", article: "c'est un framework conçu par twitter"},
// {titre:"angular", article: "développé par Google et la communauté Angular"},
// {titre:"Vue.JS", article: "framework open source crée par Evan You"},
// {titre:"Laravel", article: "framework open source en PHP crée par Taylor Otwell"},
// {titre:"Symfony", article: "ensemble de composant PHP, créateur: Fabien Potencier (cocorico!!)"},  ]
