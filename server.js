const express = require('express');
const app = express();
const path=require('path');
const http=require('http');

app.use(express.static(path.join(__dirname,'frontend')));

const server =http.createServer();
server.on('request',(request,response)=>{
    response.statusCode=200;
    response.setHeader('content-type','text/plain');

    response.end('Hello world')

});
   
app.listen(8000, () => {
    console.log('server Running');
});