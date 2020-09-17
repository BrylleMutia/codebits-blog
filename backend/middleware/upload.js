const multer = require("multer");

// store images using multer
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "uploads");
    },
    filename: (req, file, callback) => {
        callback(null, new Date().toISOString().slice(0, 10) + "-" + file.originalname);
    },
});

// filter files by file types
const fileFilter = (req, file, callback) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        // accept file
        callback(null, true);
    } else {
        // reject file
        callback(new Error("Invalid file format"), false);
    }
};

const upload = multer({
    storage: storage,
    // limit file size by 10 MB
    limits: {
        fileSize: 1024 * 1024 * 10,
    },
    // add file filter
    fileFilter: fileFilter,
});

module.exports = upload;
