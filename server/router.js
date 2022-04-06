const express=require("express")
const router=express.Router()
const homehot=require("./data/home/homehot")
const url=require("url")
const searchData=require("./data/search/index")
router.get("/home/hot1",(req,res)=>{
    const cityName=url.parse(req.url,true).query.cityName
    res.send({
        status:200,
        result:homehot.hot1,
        city:cityName
    })
})

router.get("/home/hot2",(req,res)=>{
    const cityName=url.parse(req.url,true).query.cityName
    res.send({
        status:200,
        result:homehot.hot2,
        city:cityName
    })
})


// 搜索页面
router.get("/search",(req,res)=>{
    const keywords=url.parse(req.url,true).query.search
    res.send({
        status:200,
        result:searchData,
    })
    console.log(keywords);
})

module.exports=router