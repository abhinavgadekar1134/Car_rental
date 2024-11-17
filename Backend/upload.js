const multer = require('multer');
const path = require('path');
const { v2: cloudinary } = require('cloudinary');
const fs = require('fs');

// Configure Cloudinary
cloudinary.config({
    cloud_name: 'dptkoe6aj', // Replace with your Cloudinary cloud name
    api_key: '675343697326642',       // Replace with your Cloudinary API key
    api_secret: 'aDl--Oci2IiCSEtj4nNoEb2IiFs'  // Replace with your Cloudinary API secret
});

// Multer configuration to save files locally temporarily
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'temp/'); // Temporary folder for uploads
    },
    filename: function (req, file, cb) {
        const uniqueName = `${Date.now()}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
            callback(null, true);
        } else {
            console.log('Only PNG, JPG, and JPEG files are supported.');
            callback(new Error('Unsupported file type'));
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2 // Limit file size to 2MB
    }
});


const uploadToCloudinary = async (filePath, folder) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, { folder });
        fs.unlinkSync(filePath); // Remove the file from local storage after upload
        return result;
    } catch (error) {
        throw new Error('Cloudinary upload failed: ' + error.message);
    }
};

module.exports = { upload, uploadToCloudinary };




/*Local Storage save Start*/
// const path = require('path')
// const multer = require('multer')

// var storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,'uploads/')
//     },
//     filename:function(req,file,cb){
//         let ext = path.extname(file.originalname)
//         cb(null,Date.now()+ext)
//     }
// })

// var upload = multer({
//     storage:storage,
//     fileFilter:function(req,file,callback){
//         if(file.mimetype == "image/png" || "image/jpg" || "image/jpg")
//         {
//             callback(null,true)
//         }
//         else{
//             console.log('only jpg supported.')
//         }
//     },
//     limits:{
//         fileSize:1024*1024*2
//     }
// })

// module.exports = {upload}

/*Local Storage save End*/
