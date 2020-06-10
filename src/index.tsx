import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './ReactJs/App';
import { createStore, applyMiddleware } from 'redux';
import reducer from './ReactJs/reducers'
import main from "./WebGl/main";

const store = createStore(reducer)
main();
render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'),
);