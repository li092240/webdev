module.exports=app=>{
    const express=require('express')
    const router=express.Router()
    const Category=require('../../models/Category')

    router.get('/categories',async(req,res)=>{
        const items=await Category.find().limit(10)
        console.log(items)
        res.send(items)
    })




    
    app.use('/web/api',router)

}