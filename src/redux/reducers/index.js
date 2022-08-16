import {combineReducers} from "redux"
import city from "./city"
import search from "./search"
import login from "./login"
import collect from './collect'
const rootReducer=combineReducers({
    city:city,
    search:search,
    login:login,
    collect:collect
})
export default rootReducer