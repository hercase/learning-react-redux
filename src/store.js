import { createStore } from "redux";
import Reducers from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(Reducers, composeWithDevTools( ));


export default store;