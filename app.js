const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('public'))


app.get('/', function (req, res) {
    res.sendFile(`${__dirname}/signup.html`)
})


app.listen(3000, function () {
    console.log('Server is running on port 3000');
})