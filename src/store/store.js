import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import calculadoraReducer from './calculadora/calculadora.reducer';

const reducer = combineReducers({
    calculadora: calculadoraReducer
})
const store = configureStore({
    reducer,
})
export default store;