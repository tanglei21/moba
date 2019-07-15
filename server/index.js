const express = require('express')
const app = express()
const cors = require('cors')

app.set('secret', 'sda8fasdg98s')
app.use(cors())
app.use(express.json())

require('./routes/admin')(app)
require('./plugins/db')(app)

app.use('/uploads', express.static(__dirname + '/uploads'))

app.listen(3000, () => {
  console.log('http://localhost:3000');
})
