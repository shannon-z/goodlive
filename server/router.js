const express = require("express")
const router = express.Router()
const homehot = require("./data/home/homehot")
const url = require("url")
const searchData = require("./data/search/index")
const details=require("./data/details")
const Mock = require("mockjs")
router.get("/home/hot1", (req, res) => {
    const cityName = url.parse(req.url, true).query.cityName
    res.send({
        status: 200,
        result: homehot.hot1,
        city: cityName
    })
})

router.get("/home/hot2", (req, res) => {
    const cityName = url.parse(req.url, true).query.cityName
    res.send({
        status: 200,
        result: homehot.hot2,
        city: cityName
    })
})

// 搜索页面
router.get("/search", (req, res) => {
    const keywords = url.parse(req.url, true).query.search
    res.send({
        status: 200,
        result: searchData,
    })
    console.log(keywords);
})

// 详情页
router.get("/details", (req, res) => {
    const id = url.parse(req.url, true).query.id
    res.send({
        status: 200,
        result: details,
    })
    console.log(id);
})

router.get("/mock", (req, res) => {
    let data = Mock.Mock({
        'list|1-10': [{
            'id|+1': 1
        }]
    })
    res.send(data)
})
router.post("/login",(req,res)=>{
    const {username,password}=req.body
    if (username && password){
        res.send({
            status:200,
            token:"enj",
            nick:username
        })
    }
    else{
        res.send({
            status:400,
            msg:"error"
        })
    }
})
module.exports = router