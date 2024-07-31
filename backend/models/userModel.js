const mongoose = require('mongoose')
const {Schema} = mongoose;

const userSchema =  new Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require  : true
    },
    password : {
        type : String,
        required : true
    }
})
module.exports = mongoose.model('user',userSchema)