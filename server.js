var express = require('express');
var request = require('request');
var fs = require('fs')
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

app.get('/getGithubContributions',function(req,res){
  request('https://github.com/users/horacio23/contributions', function (error, response, body) {
      if (!error && response.statusCode == 200) {
          res.send(body);
      }

  });

});
