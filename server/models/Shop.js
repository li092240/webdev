const mongoose=require('mongoose')
const schema=new mongoose.Schema({


name:{
    type:String
},
address:{
    type:String
},
id:{
    type:Number
},
latitude:{
    type:Number
},
longitude:{
    type:Number
},
location:{
    type:Number
},
phone:{
    type:String
},
category:{
    type:String
},
su





}

)

module.exports=mongoose.model('Shop',schema)