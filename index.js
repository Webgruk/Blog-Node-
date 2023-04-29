const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'Pages/index.html'))
})
app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'Pages/about.html'))
})
app.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'Pages/contact.html'))
})
app.get('/post', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'Pages/post.html'))
})

app.listen(4000, () => {
  console.log('App listening on port 4000')
})
