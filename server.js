var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('./public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Listening to Port '+app.get('port'));

});

app.get('/api',function(req,res){
  res.send("Hi am an api. ill have more info later");

});
