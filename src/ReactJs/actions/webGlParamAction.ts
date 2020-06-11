export const SET_SPEED = 'SET_SPEED';
export const SET_ROTATION = 'SET_ROTATION';

export function setSpeed(text: any) {
    return { type: SET_SPEED, text }
}

export function setRotation(text: any) {
    return { type: SET_ROTATION, text }
}