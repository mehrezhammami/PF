import { combineReducers, createStore } from "redux"
import PannierReducer from "../Reducer/PannierReducer"

const Store=createStore(combineReducers({

    Cart:PannierReducer,

}))
export default Store