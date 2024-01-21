const express = require('express')
const upload = require("./upload")
const Controller = require('./controller')

const route = express.Router()



route.post('/register', Controller.addcust)
route.post('/postcontact', Controller.addusercontact)
route.post('/postbooking', Controller.addBooking)
route.post('/postcar',upload.upload.single('carimg') ,Controller.addcar)


route.get('/findalluser' ,Controller.getdata)
route.get('/findallcar' ,Controller.getcardata)
route.get('/findallcontact',Controller.getContactData)
route.get('/findallbooking',Controller.getBookingData)


route.get('/finduser/:email',Controller.findElementbyid)
route.get('/findcar/:name',Controller.findCarbyid)
route.get('/findbooking/:usermail',Controller.findBookingbyid)
route.get('/login/:email/:password',Controller.loginuser)
route.get('/adminlogin/:mail/:password',Controller.adminlogin)

route.put('/update/:email',Controller.updateuser)
route.put('/updateCar/:name',upload.upload.single('carimg'),Controller.updatecar)
route.put('/updatebooking/:usermail',Controller.updateBooking)


route.delete('/delete/:email',Controller.deleteuser)
route.delete('/deleteCar/:name',Controller.deleteCar)
route.delete('/deleteCont/:email',Controller.deleteCont)
route.delete('/deletebooking/:useremail',Controller.deleteBooking)

module.exports = route