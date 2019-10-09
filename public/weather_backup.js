function realTimeWeather(){
    var myList = document.querySelector('ul');
    var today = new Date();
    var week = new Array('일','월','화','수','목','금','토');
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var day = today.getDate();
    var hours = today.getHours();
    var minutes = today.getMinutes();
 
    $('.weather-date').html(month +"월 " + day + "일 " + week[today.getDay()]+"요일");
 
    /*
     * 기상청 30분마다 발표
     * 30분보다 작으면, 한시간 전 hours 값
     */
    if(minutes < 30){
        hours = hours - 1;
        if(hours < 0){
            // 자정 이전은 전날로 계산
            today.setDate(today.getDate() - 1);
            day = today.getDate();
            month = today.getMonth()+1;
            year = today.getFullYear();
            hours = 23;
        }
    }
    
    /* example
     * 9시 -> 09시 변경 필요
     */
    
    if(hours < 10) {
        hours = '0'+hours;
    }
    if(month < 10) {
        month = '0' + month;
    }    
    if(day < 10) {
        day = '0' + day;
    } 
 
    today = year+""+month+""+day;
    // let headers = new Headers();
    var myurl = 'http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastSpaceData?serviceKey=9JTXJ93nTOvhmC0GV2r4OGW0Gd02WfFG4czz2PWIpTVifr5kYDRzMUBz7wS7jFLaZUgnI1N4m6NVTrH5aKSwTw%3D%3D&base_date=20191009&base_time=0500&nx=60&ny=127&numOfRows=10&pageNo=1&_type=json';
    var proxyurl = 'https://cors-anywhere.herokuapp.com/'
    var apiurl = proxyurl+myurl;
    // var proxyurl='https://cors.io/?'
    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    // // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    // headers.append('Origin','http://localhost:3000');

    fetch(apiurl).then(response=>response.json())
    .then(function(data){

        var testData = data['response']['body']['items']['item'][0]['baseTime'];
        $('article.hello').html(testData);
    })


    // .then(data=>$('article.hello').html(data['response']['body']['items']['item'][0]['baseTime']))
    // .then(function(data){
    //     var values = data["response"];
    //     $('article.hello').html(values);
    // })
    .catch(error => console.log(error));

    
    
}

// ,{mode: 'cors',credentials: 'include', headers: headers}

function name() {
    $('article.world').html("wow");
}