const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))


app.get('/', function (req, res) {
    res.sendFile(`${__dirname}/signup.html`)
})

app.post('/', function (req, res) {
    const firstName = req.body.fName
    const lastName = req.body.lName
    const email = req.body.email

    const data = {
        members: [{
            email_address: email,
            status: 'subscribed',
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    }

    const jsonData = JSON.stringify(data)

    const options = {
        url: 'https://us20.api.mailchimp.com/3.0/lists/1168c77b67',
        method: 'POST',
        headers: {
            'Authorization': 'xavi1 5dfd45f040d7222aaae0efb5b994a770-us20'
        },
        body: jsonData

    }

    request(options, function (error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log(response.statusCode);
        }
    })


})


app.listen(3000, function () {
    console.log('Server is running on port 3000');
})

// API key
// 5dfd45f040d7222aaae0efb5b994a770-us20

// list id
// 1168c77b67