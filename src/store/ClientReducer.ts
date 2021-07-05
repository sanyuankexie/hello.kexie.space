export type action =
    { type: "setPass", pass: number };

export function clientReducer(state = init, action: action) {
    return state;
}

export default clientReducer;

const init = {
    a : 1
}
