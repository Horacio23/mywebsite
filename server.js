var express = require('express');
var app = express();

app.use(express.static('./public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.listen(3000, function() {
  console.log('Listening to Port 3000');
});
