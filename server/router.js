const express = require("express")
const router = express.Router()
const homehot = require("./data/home/homehot")
const url = require("url")
const searchData = require("./data/search/index")
const details=require("./data/details")
const comment=require("./data/comment")
const Mock = require("mockjs")
const order=require("./data/order")
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
})

// 详情页
router.get("/details", (req, res) => {
    const id = url.parse(req.url, true).query.id
    res.send({
        status: 200,
        details: details,
        comment:comment,
    })
})
router.get("/comments", (req, res) => {
    const id = url.parse(req.url, true).query.id
    res.send({
        status: 200,
        comment:comment,
    })
})

router.get("/mock", (req, res) => {
    let data = Mock.Mock({
        'list|1-10': [{
            'id|+1': 1
        }]
    })
    res.send(data)
})
router.get("/login",(req,res)=>{
    const username=url.parse(req.url, true).query.username
    const password=url.parse(req.url, true).query.password
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
            msg:"error",
            re:'2'
        })
    }
})

router.get("/order", (req, res) => {
    const username = url.parse(req.url, true).query.username
    res.send({
        status: 200,
        order:order,
    })
})

router.post("/order/submit/comment", (req, res) => {
    const {username,id}=req.body;
    console.log(username,id)
    res.send({
        status: 200,
        msg:'评价成功'
    })
})

module.exports = router