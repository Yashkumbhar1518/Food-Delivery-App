const mongoose = require('mongoose');
const {Schema} = mongoose

const menuSchema = new Schema({

})
const Menu = mongoose.model('food_items',menuSchema)

module.exports = Menu
