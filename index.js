const express = require('express');
const mongoose = require('mongoose')
const url = 'mongodb://Database'

const app = express();
app.use(express.urlencoded())
app.use(express.json())

let allBooks= [{
  title: "Brothers Karamazov",
  author: "Dostoevsky",
  price: 2
}]


mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})

const con = mongoose.connection

con.on ('open', () => {
    console.log('Test')
})

app.post('/', (req, res, next) => {
  console.log(req.body)
  const newBook = req.body

  allBooks.push(newBook)
  res.json(newBook)
})

app.get('/', (req, res, next) => {
  res.status(200).json(allBooks)
})


const port = 8080

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
