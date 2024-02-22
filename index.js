const express = require('express')

const app = express()

const PORT = evn.PORT || 8080

app.listen(PORT, () => {
    console.log('bot sterted on PORT', PORT)
})

app.post('web-data', (req, res) => {
    console.log(123456789)
})