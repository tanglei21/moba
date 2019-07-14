const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

require('./routes/admin')(app)
require('./plugins/db')(app)

app.get('/', async (req, res) => {
  res.send('index lalal')
})

app.listen(3000, () => {
  console.log('http://localhost:3000');
})
