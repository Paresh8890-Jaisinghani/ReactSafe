const mongoose = require('mongoose');


const ContactSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    occupation : String,
    vehicle:String,
    number:String,
    age:String,
    country:String,
    address:String,
    gender:String,
    past:String
})



const Contactmodel = mongoose.model("contact",ContactSchema)


module.exports = Contactmodel