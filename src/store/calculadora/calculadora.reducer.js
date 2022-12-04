// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = 0, action) {
    switch (action.type) {
        case 'SOMAR':
            return action.payload[0] + action.payload[1]
        case 'SUBTRAIR':
            return action.payload[0] - action.payload[1]
        case 'RESETAR':
            return action.payload
        default:
            return state
    }
}