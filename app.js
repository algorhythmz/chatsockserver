/**
 * Created by Brekkishhh on 11-08-2016.
 */

var http = require('http').createServer(serverHandler);
var io = require('socket.io')(http);

http.listen(process.env.PORT ||3000);



function serverHandler(req,res) {
     if (req.url == '/') {
          res.writeHead(200, {"Content-type" : "text/plain"});
          res.write("Error 404: resource not found");
          res.end();
     }
}

io.on('connection',function (socket) {
    console.log('server is running');

    socket.on('update',function (data) {
        console.log(data);
        socket.emit('response','Hey i am main server');
    });
});
