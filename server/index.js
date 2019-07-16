const express = require('express')
const app = express()
const cors = require('cors')

app.set('secret', 'sda8fasdg98s')
app.use(cors())
app.use(express.json())

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)

app.use('/', express.static(__dirname + '/web'))
app.use('/admin', express.static(__dirname + '/admin'))
app.use('/uploads', express.static(__dirname + '/uploads'))

app.listen(3000, () => {
  console.log('serve is running');
})
