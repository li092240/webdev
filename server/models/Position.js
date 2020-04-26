const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    geohash:{type:String},
    address:{type:String},
    name:{type:String},
    city:{type:String},
    latitude:{type:String},
    longitude:{type:String},
   
})

module.exports=mongoose.model('Position',schema)