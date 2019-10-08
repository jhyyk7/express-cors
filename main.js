var express = require('express')
// var cors = require('cors')
// var fetch = require('node-fetch')
var path = require('path');

// Listen on a specific host via the HOST environment variable
// var host = process.env.HOST || '127.0.0.1';
// Listen on a specific port via the PORT environment variable
// var port = process.env.PORT || 3000;
 
// var cors_proxy = require('cors-anywhere');
//     cors_proxy.createServer({
//         originWhitelist: [], // Allow all origins
//         requireHeader: ['origin', 'x-requested-with'],
//         removeHeaders: ['cookie', 'cookie2']
//     }).listen(port, host, function() {
//         console.log('Running CORS Anywhere on ' + host + ':' + port);
//     });

var app =express();
// var corsOptions = {
//     origin: 'http://localhost:3000'
    
// }

// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept');

    
//   // intercept OPTIONS method
//     if ('OPTIONS' == req.method) {
//         res.send(200);
//     } else {
//         next();
//     }
// }  



// app.use(cors());

// app.use(allowCrossDomain);

app.use(express.static('public'));


app.get('/',function(request,response){
    response.sendfile(path.join('./weather.html'))
    // console.log(cors());
 
    // console.log(corsOptions);
    // fetch('http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastSpaceData?serviceKey=9JTXJ93nTOvhmC0GV2r4OGW0Gd02WfFG4czz2PWIpTVifr5kYDRzMUBz7wS7jFLaZUgnI1N4m6NVTrH5aKSwTw%3D%3D&base_date=20191008&base_time=0500&nx=60&ny=127&numOfRows=10&pageNo=1&_type=json').then(response=>response.json()).then(data => console.log(data));
    
})


app.listen(3000)

