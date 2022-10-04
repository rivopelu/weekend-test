import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import reducerMain from './reducer';


export const storeRedux = createStore(reducerMain, compose(applyMiddleware(thunk)));


