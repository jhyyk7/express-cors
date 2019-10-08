function realTimeWeather(){

    // let headers = new Headers();
    var myurl = 'http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastSpaceData?serviceKey=9JTXJ93nTOvhmC0GV2r4OGW0Gd02WfFG4czz2PWIpTVifr5kYDRzMUBz7wS7jFLaZUgnI1N4m6NVTrH5aKSwTw%3D%3D&base_date=20191008&base_time=0500&nx=60&ny=127&numOfRows=10&pageNo=1&_type=json';
    var proxyurl = 'https://cors-anywhere.herokuapp.com/'
    var apiurl = proxyurl+myurl;
    // var proxyurl='https://cors.io/?'
    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    // // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    // headers.append('Origin','http://localhost:3000');

    fetch(apiurl).then(response=>response.json())
    .then(data => document.querySelector('article').innerHTML=data)
    .catch(error => console.log(error));

    
    
}

// ,{mode: 'cors',credentials: 'include', headers: headers}

