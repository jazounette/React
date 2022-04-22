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
