const express = require('express')
const md5 = require('md5')
const fs = require('fs')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
    fs.readFile(path.resolve(__dirname, './success.html'), null, (err, data) => {
        if (err) return
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
    })
})

app.get('/md5', (req, res) => {
    const { str } = req.query
    let md5_str = md5(str)
    res.json({
        status: 200,
        data: md5_str
    })
})

const port = 7979
app.listen(port, () => {
    console.log(`The server port is ${port}`)
})