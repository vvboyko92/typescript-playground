import { createStore } from 'redux';
import webGlApp from './reducers'

const store = createStore(webGlApp);

export default store;