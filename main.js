var express = require('express')
var bodyparser=require('body-parser')
var cors = require('cors')
var fetch = require('node-fetch')
var path = require('path');


var app =express();


app.use(express.static('public'));
app.use(cors());


app.get('/',function(request,response){
    response.sendfile(path.join('./weather.html'))

    
})
app.get('/parse',function(request,response){
    // fetch('testjson.json')
    // .then(response=>response.json())
    // .then(data => console.log(data))
    // .catch(err=>console.log(err));
    // response.end('hello');
    response.sendfile(path.join('./tester.html'))
})

app.listen(3000)

