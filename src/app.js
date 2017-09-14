const express = require('express')
const app = express()

app.set('port', process.env.APP_PORT || 8080);

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(app.get('port'), function () {
  console.log('Example app listening on port '+app.get('port'))
})

module.exports = app
