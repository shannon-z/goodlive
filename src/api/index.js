import axios from '../utils/request'
const base={
    baseUrl:"http://localhost:5566",
    cityUrl:"/api/aj/getcitycode",
    homehot1:"/api/home/hot1",
    homehot2:"/api/home/hot2",
    searchUrl:"/api/search",
    details:"/api/details",
    comments:"/api/comments",
    login:"/api/login",
    order:"/api/order",
    submitComment:"/api//order/submit/comment",
}
const api={
    // 获取首页热门产品1
    getHomeHot1(params){
        return axios.get(base.baseUrl+base.homehot1,{
            params
        })
    },
    getHomeHot2(params){
        return axios.get(base.baseUrl+base.homehot2,{
            params
        })
    },
    // 获取城市列表
    getCityLists(){
        return axios.get(base.cityUrl)
    },
    // 获取搜索列表
    search(params){
        return axios.get(base.baseUrl+base.searchUrl,{
            params
        })
    },
    details(params){
        return axios.get(base.baseUrl+base.details,{
            params
        })
    },
    comments(params){
        return axios.get(base.baseUrl+base.details,{
            params
        })
    },
    login(params){
        return axios.get(base.baseUrl+base.login,{
            params
        })
    },
    order(params){
        return axios.get(base.baseUrl+base.order,{
            params
        })
    },
    submitComment(params){
        return axios.post(base.baseUrl+base.submitComment,params)
    }
}

export default api;