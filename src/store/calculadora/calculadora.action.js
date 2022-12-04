export function somar(valor1, valor2) {
    return {
        type: 'SOMAR',
        payload: [valor1, valor2]
    }
}

export function subtrair(valor1, valor2) {
    return {
        type: 'SUBTRAIR',
        payload: [valor1, valor2]
    }
}


export function resetar() {
    return {
        type: 'RESETAR',
        payload: 0
    }
}