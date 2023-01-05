const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const app = express()
const port = process.env.APP_PORT
const filesRoute = require('./routes/files')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send({status: true, message: "Success"})
})

app.use('/files', filesRoute)

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`)
})