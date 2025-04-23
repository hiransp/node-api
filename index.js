const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.status(200).json({
        "message": "Nodejs Server Running!"
    })
})

app.get('/ping', (req, res) => {
    res.status(200).json({
        "ping": "pong"
    })
})

app.post('/user', (req, res) => {
    res.status(200).json({ "status": "success", "data": req.body })
    console.log(req.body);

})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

