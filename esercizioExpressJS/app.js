const express = require('express')
const app = express()
const port = 3000

let contatore = 0;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/add1toContatore', (req, res) => {
  console.log(req)
  contatore = contatore +1;
  res.redirect('/contatore');
})


app.get('/contatore', (req, res) => {
  res.send("Il contatore è : " + contatore + '<br><br>')


})

app.get('/contatti', (req,res) => {
  res.send('I contatti di Marianna sono 3386675846!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})