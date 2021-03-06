import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import { Reducer } from "react";
import thunk from 'redux-thunk';
import { createLogger } from "redux-logger"
import { channels, currentChannel, messages } from './reducers';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWare: any = [thunk];
window.location.href.indexOf("localhost") > -1 && middleWare.push(createLogger());

const reduxState/*: Reducer<IReduxState, any>*/ = combineReducers({
    channels,
    currentChannel,
    messages
});
const store = createStore(reduxState, composeEnhancers(applyMiddleware(...middleWare)));

export default store;