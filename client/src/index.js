import React from 'react';
import {Provider} from "react-redux"
import {createStore, compose, combineReducers} from "redux"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import authReducer from "./store/AuthStore/reducer"


const rootReducer = combineReducers({
    auth: authReducer
})

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
// ComposeEnhancers povezuje redux sa redux dev tools u chromu
const store = createStore(rootReducer, composeEnhancers())

const app = (
    <Provider store={store}>
        <App></App>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
