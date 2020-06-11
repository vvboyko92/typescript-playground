import {SET_SPEED, SET_ROTATION} from '../actions/webGlParamAction';

const initialState = {
    rotation: {
        xAxis: 0,
        yAxis: 0,
        zAxis: 0
    },
    speed: 0,
    colors: [
        0.5,  0.5,  0.5,  1.0,    // white
        1.0,  0.0,  0.0,  1.0,    // red
        0.0,  1.0,  0.0,  1.0,    // green
        0.0,  0.0,  1.0,  1.0,    // blue
    ]
}

const webGlParams = (state: any[], action: any) => {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {
        case SET_SPEED:
            return Object.assign({}, state, {
                speed: action.text
            });
        case SET_ROTATION:
            return Object.assign({}, state, {
                rotation: action.text
            });
        default:
            return state;
    }
}

export default webGlParams;