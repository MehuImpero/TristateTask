import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';



const store = createStore(
    combineReducers(),

    undefined,
    compose(applyMiddleware(thunk))
);

export default store;
