import {v2 as cloudinary} from "cloudinary"
import { response } from "express";

import fs from "fs"
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
       const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file uploaded successfully
        //console.log("file is uplaoded on cloudinary", response.url);
        fs.unlinkSync(localFilePath)
        return response;

        
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved file as upload operation failed

        return null
        
    }
}

// *** Cloudinary sample code ***
// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });

export {uploadOnCloudinary}