import { useSelector } from 'react-redux';
import './display.css';

export function Display() {

    const resultado = useSelector(function (state) {
        return state.calculadora
    })

    return (
        <div className="containerDisplay">
            <span>Resultado: {resultado} </span>
        </div>
    )
}