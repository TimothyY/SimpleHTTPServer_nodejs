var http = require('http');

function callback(req,res){  
  var urlParts = req.url;
  if(urlParts=='/index' || urlParts=='/'){
    res.writeHead(200, {'Content-Type':"text/html"});
    res.end('node js application running normally');
  }else{
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('this is not he page you are looking for');
  }
}

http.createServer(callback).listen(1111);


console.log('Server is running on port 1111.');