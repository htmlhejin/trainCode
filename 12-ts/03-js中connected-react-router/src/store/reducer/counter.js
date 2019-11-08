
export default function (state = { number: 99 }, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { number: state.number + 1 }
        case 'DECREMENT':
            return { number: state.number - 1 }
        default:
            return state;
    }
}