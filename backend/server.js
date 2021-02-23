const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const exerciseRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

require('dotenv').config();

const app = express()
const port = process.env.PORT || 9000;
//console.log(port)

app.use(cors())
app.use(express.json())

app.use('/exercises', exerciseRouter)
app.use('/users', usersRouter)

const uri = process.env.DB_URL
//console.log(uri)
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
  })

app.get('/', (req,res) => {
  res.send("Welcome to root!!!")
})

app.listen(port, () => console.log(`Server listening on port ${port}.`))