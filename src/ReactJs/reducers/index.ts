import { combineReducers } from 'redux'
import webGlParams from './webGlParamsReducer'

const webGlApp = combineReducers({
    webGlParams,
});

export default webGlApp