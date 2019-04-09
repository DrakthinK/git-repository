const http=require('http');
const handleServer=function(req, res){
res.writeHead(200,{'content-type' :'text/html' });
res.write('<h1> HOla mundo<h1>');
res.end();

}
Server=http.createServer(handleServer);
Server.listen(3000,function()
   {
     console.log('Server escuchando en puerto 3000');

   }
)
