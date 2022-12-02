const express = require("express")
const path = require("path")
var bodyParser = require('body-parser')
const app = express()

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(path.join(__dirname, 'public')));

app.post('/', urlencodedParser, function (req, res) {
    console.log(req.body.email, req.body.password)
  })

app.get('/', (req, res) => {
    res.sendFile("index.html")
})


app.listen(3333, () => {
    console.log("server started at port 3000")
})