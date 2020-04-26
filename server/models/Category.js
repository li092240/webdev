const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    id:{
        type:Number
    },
    is_in_serving:{
        type:Boolean
    },
    description:{
        type:Number
    },
    title:{
        type:String
    },
    link:{
        type:String
    },
    image_url:{
        type:String
    },
    icon_url:{
        type:String
    },
    title_color:"",
    


 
})

module.exports=mongoose.model('Category',schema)