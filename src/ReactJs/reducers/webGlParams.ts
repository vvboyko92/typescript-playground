const webGlParams = (state: any[] = [], action: any) => {
    switch (action.type) {
        case 'ADD_PARAM':
            return state.concat([action.text])
        default:
            return false;
    }
}

export default webGlParams;