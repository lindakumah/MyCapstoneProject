import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from 'react-redux';
//import {createStore} from 'redux';
import store from './store';

// const store = createStore(Reducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// ReactDOM.render(
// <Provider store={store}>
// <App />
// </Provider>,
//     document.getElementById("root"));