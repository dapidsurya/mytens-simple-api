const express = require('express')
const multer  = require('multer')
const router = express.Router()
const path = require('path')
const { getDatas, uploadImage } = require('../handlers/files')

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/uploads'))
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({storage: diskStorage})

router.get('/', getDatas)

router.post('/upload', upload.single('image_file'), uploadImage)

module.exports = router