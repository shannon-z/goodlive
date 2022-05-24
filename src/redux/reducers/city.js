import { INIT_CITY, CHANGE_CITY } from "../constants"
import BMap from 'BMap'
const defaultState = {
    cityName: '北京'
}

console.log(defaultState)
export default function city(state = defaultState, action) {
    switch (action.type) {
        case INIT_CITY:
            return {
                cityName: action.cityName
            };
        case CHANGE_CITY:
            return {
                cityName: action.cityName
            }
        default:
            return state;
    }
}