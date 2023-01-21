const express = require('express')
const app = express()
const routes = require('./routes')
const port = process.env.PORT || 4000

//This is the simpler body parse
app.use(express.json())
app.use(express.static('public'));
//Use the routes
app.use(routes)

// app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})

