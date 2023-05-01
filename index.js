import express from 'express'
import { engine } from 'express-handlebars'

const app = express()

app.use(express.static('public'))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/about', (req, res) => {
  res.render('about')
})
app.get('/contact', (req, res) => {
  res.render('contact')
})
app.get('/post', (req, res) => {
  res.render('post')
})

app.listen(4000, () => {
  console.log('App listening on port 4000')
})
