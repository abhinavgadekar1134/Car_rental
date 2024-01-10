const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fname: String,
    lname: String,
    password:String,
    dob: String,
    email: String,
    contactno: Number,
    gender: String,
    address: String

})

const carSchema = mongoose.Schema({
    name:String,
    desc:String,
    model:String,
    cartype:String,
    rent:Number,
    fuel:String,
    price:Number,
    noSeats:Number
})

const contactSchema=mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    city: String,
    state: String,
    contactno: Number,
    suggestion: String
})

const bookingSchema = mongoose.Schema({
    username:String,
    usermail:String,
    carname:String,
    payment:Number,
    contactno:String,
    hours:Number,
    driver:String,
    date:String,
    contactno:String,
    curdate:Date
})

const adminSchema = mongoose.Schema({
    name:String,
    mail:String,
    password:String
})

// mongoose.pluralize(null);
// module.exports = mongoose.model('registeredcustomers', userSchema)
module.exports = {userSchema,carSchema,contactSchema,bookingSchema,adminSchema}
// module.exports = mongoose.model('cars', carSchema)
