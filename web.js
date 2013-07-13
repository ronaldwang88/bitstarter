var express = require('express');

var app = express.createServer(express.logger());


var fs = require('fs');

app.get('/', function(request, response) {

  var text = fs.readFileSync('index.html');
  var answer = text.toString();
	
  response.send(answer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
