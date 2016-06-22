var express = require('express');
var request = require('request');
var fs = require('fs')
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('./public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    request('https://github.com/users/horacio23/contributions', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        fs.writeFile('./public/activity.html', body,  function(err) {
           if (err) {
               return console.error(err);
           }
           console.log("Data written successfully!");

        });
      }
    })
  res.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Listening to Port '+app.get('port'));

});

app.get('/api',function(req,res){
  res.send("Hi am an api. ill have more info later");

});
