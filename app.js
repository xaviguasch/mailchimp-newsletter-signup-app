const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()



app.listen(3000, function () {
    console.log('Server for the Newsletter Signup is running on port 3000');
})