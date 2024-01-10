// const {log} = require('console')

const express = require('express')
const app = express()
const cons = require('cors')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/rentalmgmt')
    .then(console.log("Connected to database"))
    .catch((err) => {
        console.log(err)
    })

app.use(cons())
app.use(express.json())
const route = require('./route')
app.use('/abc',route)

app.get(('/'), (req, res) => {
    res.send("running at localhost:8000")
})

app.listen(8000, () => console.log("running at localhost:8000"))