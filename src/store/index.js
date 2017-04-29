/**
 * Created by sourabh on 29/4/17.
 */

import {middleware} from "../middleware"
import {eventsReducer} from"../reducer"
import {createStore,applyMiddleware} from "redux"

const storeMiddleware = applyMiddleware(middleware);
const store = createStore(eventsReducer, storeMiddleware)

export default store;