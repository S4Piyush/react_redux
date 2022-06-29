import rootReducers from "./reducers/indax";
import { createStore } from "redux";

const Store= createStore(rootReducers);

 export  default Store;