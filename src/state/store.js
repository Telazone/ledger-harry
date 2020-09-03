import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import modeChangeReducer from './modeChange/modeChangeReducer';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancer(applyMiddleware(thunk));
const reducer = combineReducers({
    modeChangeReducer,
})
const store = createStore(
    reducer,
    enhancer
    //redux devtools extension
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store