var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(req, res){
  console.log('Responding to a request. ');
  //res.end('<h1>Hello World</h1>');
  var url = req.url;
  console.log(url);
  var fileName = 'test.html';
  if(url.length > 1){
    filename = url.substring(1);

  }
  console.log(fileName);
  var filePath = path.resolve(__dirname, 'app', fileName);
  console.log(filePath);
  fs.readFile(filePath, function(err, data){
    res.end(data);
  });

});
server.listen(3000);
