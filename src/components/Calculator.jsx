import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { resetar, somar, subtrair } from '../store/calculadora/calculadora.action'
import './calculator.css'
export function Calculator() {

    const [valor1, setValor1] = useState(0)
    const [valor2, setValor2] = useState(0)

    const dispatch = useDispatch()

    return (
        <div className='containerCalculator'>
            <div className='containerValores'>
                <div className='valores'>
                    <label>Primeiro valor</label>
                    <input
                        placeholder='0'
                        type="number"
                        onChange={(event) => setValor1(Number(event.target.value))}
                    />
                </div>
                <div className='valores'>
                    <label>Segudo valor</label>
                    <input
                        placeholder='0'
                        type="number"
                        onChange={(event) => setValor2(Number(event.target.value))}
                    />
                </div>
            </div>
            <div className='containerBotoes'>
                <button
                    className='btnSomar'
                    onClick={() => dispatch(somar(valor1, valor2))}
                >
                    Somar
                </button>
                <button
                    className='btnSubtrair'
                    onClick={() => dispatch(subtrair(valor1, valor2))}
                >
                    Subtrair
                </button>
                <button
                    className='btnResetar'
                    onClick={() => dispatch(resetar())}
                >
                    Resetar
                </button>
            </div>

        </div>

    )
}