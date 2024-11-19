const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.status(200).json({
        "message": "Nodejs Server Running!"
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})