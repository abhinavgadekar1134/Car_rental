const modal = require('./modal')
const mongoose = require('mongoose')
const nodemailer = require("nodemailer");
const { upload,uploadToCloudinary } = require('./upload');

mongoose.pluralize(null);
const custmodal = mongoose.model('registeredcustomers', modal.userSchema)
const carmodal = mongoose.model('car', modal.carSchema)
const contactmodal = mongoose.model('contact', modal.contactSchema)
const bookingmodal = mongoose.model('bookings', modal.bookingSchema)
const adminModal = mongoose.model('admin', modal.adminSchema)
const FeedBackModal = mongoose.model('FeedBack', modal.FeedBackSchema)

// ------------------------------------ Customers ---------------------------------------------------
const addcust = async (req, res) => {
    const { fname, lname, password, dob, email, contactno, gender, address } = req.body;

    try {
        const custdata = new custmodal({
            fname, lname, password, dob, email, contactno, gender, address
        })
        const data = await custdata.save();

        res.status(200).send({ data })
    }
    catch (err) {
        console.log(err)
        res.status(400).send({ err })
    }
}


const getdata = async (req, res) => {
    const userdata = await custmodal.find();

    try {
        res.status(200).send({ data: userdata, msg: "success" })
    } catch (error) {
        console.log(error);
        res.status(400).send({ error });
    }
}




const updateuser = async (req, res) => {
    try {
        const { email } = req.params
        const { fname, lname, password, dob, contactno, gender, address } = req.body
        const data = await custmodal.updateOne(
            { email },
            {
                $set: { fname, lname, password, dob, contactno, gender, address }
            }
        )
        if (data.modifiedCount > 0) {
            res.status(200).send({ msg: "data updated" })
        }
        else {
            res.status(200).send({ msg: "data not updated" })

        }
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ msg: "user not found" })
    }
}

const deleteuser = async (req, res) => {

    try {
        const { email } = req.params
        const data = await custmodal.deleteOne({ email })

        if (data.deletedCount > 0) {
            res.status(200).send({ msg: "Data deleted" })
        }
        else {
            res.status(200).send({ msg: "Data not deleted" })

        }

    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: "data cant delete" })
    }
}

const findElementbyid = async (req, res) => {
    try {
        const { email } = req.params
        const userdata = await custmodal.findOne({ email })
        res.status(200).send(userdata)
    } catch (error) {
        console.log(error);
        res.status(400).send("Not found")
    }

}


// ------------------------------ Cars ---------------------------------
const addcar = async (req, res) => {
    let carimg;
    const { name, model, cartype, rent, fuel, price, noSeats, desc } = req.body;
    if (req.file) {
        carimg = req.file.path
    }
    
    try {
        const result = await uploadToCloudinary(carimg, 'upload'); // Upload to Cloudinary
        carimgAtCloud = result.secure_url;
        carimg = carimgAtCloud;
        const cardata = new carmodal({
            name, model, cartype, rent, fuel, price, noSeats, desc, carimg
        })
        
        const data = await cardata.save();
        res.status(200).send({ data })
    }
    catch (err) {
        // console.log(err)
        res.status(400).send({ err })
    }

}
const updatecar = async (req, res) => {
    let carimg;
    try {
        const { name } = req.params
        const { model, cartype, rent, fuel, price, noSeats, desc } = req.body
        if (req.file) {
            carimg = req.file.path
        }
        const cdata = await carmodal.updateOne(
            { name },
            {
                $set: { model, cartype, rent, fuel, price, noSeats, desc, carimg }
            }
        )
        if (cdata.modifiedCount > 0) {
            res.status(200).send({ msg: "car data updated" })
        }
        else {
            res.status(200).send({ msg: "car data not updated" })

        }
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ msg: "car not found" })
    }
}

const getcardata = async (req, res) => {
    const cardata = await carmodal.find();

    try {
        res.status(200).send({ data: cardata, msg: "success" })
    } catch (error) {
        console.log(error);
        res.status(400).send({ error });
    }
}
const findCarbyid = async (req, res) => {
    try {
        const { name } = req.params
        const data = await carmodal.findOne({ name })
        res.status(200).send({ msg: "success", data })
    } catch (error) {
        console.log(error);
        res.status(400).send("Not found")
    }

}
const deleteCar = async (req, res) => {

    try {
        const { name } = req.params
        const data = await carmodal.deleteOne({ name })

        if (data.deletedCount > 0) {
            res.status(200).send({ msg: "Data deleted" })
        }
        else {
            res.status(200).send({ msg: "Data not deleted" })

        }

    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: "data cant delete" })
    }
}

// --------------- User Contact ------------------

const addusercontact = async (req, res) => {

    const { fname, lname, email, city, state, contactno, suggestion } = req.body
    try {
        const abdata = new contactmodal({
            fname, lname, email, city, state, contactno, suggestion
        })
        const data = await abdata.save()

        res.status(200).send({ data })
    }
    catch (err) {
        console.log(err)
        res.status(400).send({ err })
    }

    let dotenv = require('dotenv').config()
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // use SSL
        auth: {
            user: dotenv.parsed.REACT_APP_MAIL_U,
            pass: dotenv.parsed.REACT_APP_MAIL_P,
        }
    });

    const info = await transporter.sendMail({
        from: "Car Rental App",
        to: `abhinavgadekar13@gmail.com,${email}`, // list of receivers
        subject: "Contact for car rental app", // Subject line
        html: `
        <h4>Name:       <span style="font-weight: 100; color: rgb(0, 13, 255);">    ${fname, lname}     </span></h4>
        <h4>Email:      <span style="font-weight: 100; color: rgb(255, 0, 0);">     ${email}     </span></h4>
        <h4>suggestion: <span style="font-weight: 100; color: rgb(0, 0, 0);">   ${suggestion}</span></h4>  
        <h4>City:       <span style="font-weight: 100; color: rgb(3, 3, 3);">   ${city}      </span></h4>
        <h4>State:      <span style="font-weight: 100; color: rgb(31, 4, 4);">  ${state}     </span></h4>
        <h4>Contact no: <span style="font-weight: 100; color: rgb(0, 0, 0);">   ${contactno} </span></h4>
    
        `// html body
    });
    // console.log(info)
}
const deleteCont = async (req, res) => {

    try {
        const { email } = req.params
        const data = await contactmodal.deleteOne({ email })

        if (data.deletedCount > 0) {
            res.status(200).send({ msg: "Data deleted" })
        }
        else {
            res.status(200).send({ msg: "Data not deleted" })

        }

    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: "data cant delete" })
    }
}
const getContactData = async (req, res) => {
    const contdata = await contactmodal.find();

    try {
        res.status(200).send({ data: contdata, msg: "success" });
        // console.log(contdata);
    } catch (error) {
        console.log(error);
        res.status(400).send({ data: "cant fetch", error });
    }
}





// ------------------- Booking ----------------------------
const addBooking = async (req, res) => {
    const { username, usermail, carname, payment, contactno, hours, driver, date, curdate } = req.body;

    try {
        const bookdata = new bookingmodal({
            username, usermail, carname, payment, contactno, hours, driver, date, curdate
        })
        const data = await bookdata.save();

        res.status(200).send({ data })
    }
    catch (err) {
        console.log(err)
        res.status(400).send({ err })
    }
}


const getBookingData = async (req, res) => {
    const userdata = await bookingmodal.find();

    try {
        res.status(200).send({ data: userdata, msg: "success" })
    } catch (error) {
        console.log(error);
        res.status(400).send({ error });
    }
}




const updateBooking = async (req, res) => {
    try {
        const { usermail } = req.params
        const { username, carname, payment, contactno, hours, driver, date } = req.body
        const data = await bookingmodal.updateOne(
            { usermail },
            {
                $set: { username, carname, payment, contactno, hours, driver, date }
            }
        )
        if (data.modifiedCount > 0) {
            res.status(200).send({ msg: "data updated" })
        }
        else {
            res.status(200).send({ msg: "data not updated" })

        }
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ msg: "user not found" })
    }
}

const deleteBooking = async (req, res) => {

    try {
        const { email } = req.params
        const data = await bookingmodal.deleteOne({ email })

        if (data.deletedCount > 0) {
            res.status(200).send({ msg: "Data deleted" })
        }
        else {
            res.status(200).send({ msg: "Data not deleted" })

        }

    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: "data cant delete" })
    }
}

const findBookingbyid = async (req, res) => {
    try {
        const { usermail } = req.params
        const userdata = await bookingmodal.findOne({ usermail })
        res.status(200).send({ data: userdata, msg: "success" })
    } catch (error) {
        console.log(error);
        res.status(400).send("Not found")
    }

}

// -------------------- login --------------------------
const loginuser = async (req, res) => {
    try {
        const { email } = req.params
        const { password } = req.params

        const userdata = await custmodal.findOne({ email })
        if (userdata.password == password) {
            res.status(200).send({ status: "success", fname: userdata.fname, email: userdata.email });
        }
        else {
            res.status(400).send('fail');
        }
        // res.status(200).send(userdata)
    } catch (error) {
        console.log(error);
        res.status(400).send("Not found")
    }

}

// ----------------------  FeedBack  ------------------------------------------------
const addFeedBack = async (req, res) => {
    const { name, usermail, feedBack, ratings } = req.body;

    try {
        const feedBackdata = new FeedBackModal({
            name, usermail, feedBack, ratings
        })
        const data = await feedBackdata.save();

        res.status(200).send({ data })
    }
    catch (err) {
        console.log(err)
        res.status(400).send({ err })
    }
}


const getFeedBackdata = async (req, res) => {
    const feedBackdata = await FeedBackModal.find();

    try {
        res.status(200).send({ data: feedBackdata, msg: "success" })
    } catch (error) {
        console.log(error);
        res.status(400).send({ error });
    }
}


const deleteFeedBack = async (req, res) => {

    try {
        const { email } = req.params
        const feedBackdata = await FeedBackModal.deleteOne({ email })

        if (feedBackdata.deletedCount > 0) {
            res.status(200).send({ msg: "Data deleted" })
        }
        else {
            res.status(200).send({ msg: "Data not deleted" })

        }

    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: "data cant delete" })
    }
}

const findFeedBackbyid = async (req, res) => {
    try {
        const { name } = req.params
        const feedBackdata = await FeedBackModal.findOne({ name })
        res.status(200).send(feedBackdata)
    } catch (error) {
        console.log(error);
        res.status(400).send("Not found")
    }

}
// ----------------------- End Feed BAck --------------------------------------
// ----------Admin login
const adminlogin = async (req, res) => {
    try {
        const { mail } = req.params
        const { password } = req.params

        const userdata = await adminModal.findOne({ mail })
        if (userdata.password == password) {
            res.status(200).send({ status: "success", mail: userdata.mail, password: userdata.password });
        }
        else {
            res.status(400).send('fail');
        }
        // res.status(200).send(userdata)
    } catch (error) {
        console.log(error);
        res.status(400).send("Not found")
    }

}


module.exports = {
    addcust, getdata, updateuser, deleteuser, findElementbyid,
    addcar, getcardata, findCarbyid, updatecar, deleteCar,
    addusercontact, deleteCont, getContactData,
    addBooking, getBookingData, updateBooking, deleteBooking, findBookingbyid,
    loginuser, adminlogin,
    addFeedBack, getFeedBackdata, deleteFeedBack, findFeedBackbyid
}

