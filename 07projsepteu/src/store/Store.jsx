import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import AddCartDataFunc from "../réducteurs/AddCartReducer";
import CounterReducer from "../réducteurs/CompteurReducer";

const rootReducer = combineReducers({
    AddCartReducer, CounterReducer
})

const store = configureStore ({reducer: rootReducer});


export default store;
