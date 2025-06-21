import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

// Upload an file
const UploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    //file has been uploaded successfully
    console.log("File is uploaded on Cloudinary !", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally saved temporary file as upload operation got failed
    return null;
  }
};

export { UploadOnCloudinary };

/* improved by CHATGPT
-----------------------------

const UploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath || !fs.existsSync(localFilePath)) {
      console.warn("No file to upload or file does not exist:", localFilePath);
      return null;
    }

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("✅ File uploaded to Cloudinary:", response.url);

    // Delete local file after successful upload
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.error("❌ Cloudinary upload failed:", error);

    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return null;
  }
};

export { UploadOnCloudinary };


*/
