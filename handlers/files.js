const fs = require('fs')
const uploadFileDir = 'uploads'

const getDatas = ((req, res) => {
    const fileDir = './public/uploads'
    fs.readdir(fileDir, (err, files) => {
        let results = []
        const baseUrl = `${req.protocol}://${req.header('host')}`

        files.forEach(file => {
            let result = {
                filename: file,
                url: `${baseUrl}/${uploadFileDir}/${file}`
            }

            results.push(result)
        })

        res.send({status: true, message: "Get images file list", data: results})
    })
})

const uploadImage = (req, res) => {
    const file = req.file

    if (!file) {
        res.status(400).send({
            status: false,
            message: "No selected file"
        })
    } else {
        res.send({
            status: true,
            message: "Successfully uploaded file"
        })
    }
}

module.exports = { getDatas, uploadImage }