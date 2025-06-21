import multer from "multer";
import path from "path";
import fs from "fs";

// Define temp folder safely
const tempFolder = path.resolve("public/temp");

// Ensure the folder exists
if (!fs.existsSync(tempFolder)) {
  fs.mkdirSync(tempFolder, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,tempFolder);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });
