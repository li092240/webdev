module.exports=app=>{
    const express=require('express')
    const router=express.Router()
    const Category=require('../../models/Category')
    const Position=require('../../models/Position')
    const FoodCategory=require('../../models/FoodCategory')





    router.post('/categories',async(req,res)=>{
        const model=await Category.create(req.body)
       
        res.send(model)


    })

    router.post('/foodcategories',async(req,res)=>{
        const model=await FoodCategory.create(req.body)
       
        res.send(model)


    })




    router.post('/positions',async(req,res)=>{
        const model=await Position.create(req.body)
      
        res.send(model)


    })
    router.get('/positions',async(req,res)=>{
        const items=await Position.find().limit(10)
     
        res.send(items)
    })
    router.put('/positions/:id',async(req,res)=>{
        const model=await Position.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })
    router.get('/positions/:id',async(req,res)=>{
    
        const model=await Position.findById(req.params.id)
        res.send(model)
        console.log(model)
    })
    router.delete('/positions/:id',async(req,res)=>{
        await Position.findByIdAndDelete(req.params.id,req.body)
        res.send({
           success:true
        })
    })



   
    router.put('/categories/:id',async(req,res)=>{
        const model=await Category.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })



router.delete('/categories/:id',async(req,res)=>{
    await Category.findByIdAndDelete(req.params.id,req.body)
    res.send({
       success:true
    })
})

    router.get('/categories',async(req,res)=>{
        const items=await Category.find().populate('parent').limit(10)
        console.log(items)
        res.send(items)
    })

    router.get('/categories/:id',async(req,res)=>{
        const model=await Category.findById(req.params.id)
        res.send(model)
    })



    router.put('/foodcategories/:id',async(req,res)=>{
        const model=await FoodCategory.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })



router.delete('/foodcategories/:id',async(req,res)=>{
    await FoodCategory.findByIdAndDelete(req.params.id,req.body)
    res.send({
       success:true
    })
})

    router.get('/foodcategories',async(req,res)=>{
        const items=await FoodCategory.find().limit(10)
        console.log(items)
        res.send(items)
    })

    router.get('/foodcategories/:id',async(req,res)=>{
        const model=await FoodCategory.findById(req.params.id)
        res.send(model)
    })







    app.use('/admin/api',router)



    const multer=require('multer')
    const upload=multer({dest:__dirname+'/../../uploads'})
    app.post('/admin/api/upload',upload.single('file'),async(req,res)=>{
        const file=req.file
        file.url=`http://localhost:3000/uploads/${file.filename}`
        res.send(file)

    })



}