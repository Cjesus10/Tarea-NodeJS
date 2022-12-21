const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('120 - 20 = 100')
})

app.listen(port, () => {
    console.log(`El servidor esta encendido en http://localhost:${port}`)
})
