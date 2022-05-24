import {combineReducers} from "redux"
import city from "./city"
import search from "./search"
import login from "./login"
const rootReducer=combineReducers({
    city:city,
    search:search,
    login:login
})
export default rootReducer