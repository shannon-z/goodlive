import {INIT_CITY,CHANGE_CITY} from"../constants"
export function initCITY(cityName){
    return{
        type:INIT_CITY,
        cityName:cityName
    }
}
export function changeCity(cityName){
    return{
        type:CHANGE_CITY,
        cityName:cityName
    }
}