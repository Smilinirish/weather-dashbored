var apiKey = "7c5b99b6cf3d81cc560c1abaf51f3da7";
var searchForm = document.querySelector(".searchForm");
var search = document.querySelector("#location");
var pastSearch = [];
// check local storage sets array, if empty move on 
if (JSON.parse(localStorage.getItem("pastSearch")) !== null) {
  pastSearch = JSON.parse(localStorage.getItem("pastSearch"));
  // makeBtns()
}
// adds search to local storage 
function submit() {
  getWeather();
  event.preventDefault();
  if (pastSearch.indexOf(search.value) === -1) {
    pastSearch.push(search.value);
    localStorage.setItem("pastSearch", JSON.stringify(pastSearch));
  }
}
// add buttons for past search, works but neet to fix css 
// function makeBtns() {
//     for(i=0;i<pastSearch.length;i++){
//         var btn = document.createElement("button")
//         btn.innerHTML = pastSearch[i];
//         btn.type = "submit";
//         btn.name = pastSearch[i];
//         btn.className = "d-flex btn btn-secondary bg-gradient m-2 flex-fill"
//         form.appendChild(btn);
//         } 
//     }

searchForm.addEventListener("submit", submit);
// window.onload(makeBtns)
function getWeather() {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + search.value + "&units=imperial&appid=" + apiKey, {
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (document.querySelector('.check') === null) {
        $('.mainSection').append('<div class="container check"><div class="card"><div class="card-body text-center "><p>Todays Forcast</p><h1>Temp:' + data.main.temp + '°</h1><h2>Feels Like:' + data.main.feels_like + '°</h2><h3>Humidity:' + data.main.humidity + '%</h3><h3>' + data.weather[0].description + '</h3></h3></div></div></div>');
      }
      else {
        $('.check').replaceWith('<div class="container check"><div class="card"><div class="card-body text-center "><p>Todays Forcast</p><h1>Temp:' + data.main.temp + '°</h1><h2>Feels Like:' + data.main.feels_like + '°</h2><h3>Humidity:' + data.main.humidity + '%</h3><h3>' + data.weather[0].description + '</h3></h3></div></div></div>');
      }
      // // feels like temp
      // console.log(data.main.feels_like + "°");
      // // actual temp 
      // console.log(data.main.temp + "°");
      // // humidity 
      // console.log(data.main.humidity + "%")
      // // weather discription iE partly cloudly 
      // console.log(data.weather[0].description)
    });


  //   5 day forcast working just need to work out the dot notation
  fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + search.value + "&units=imperial&cnt=6&appid=" + apiKey, {
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //   object 
      console.log(data);
      if (document.querySelector('.check2') === null) {
        $('.5dayMainSection').append('<h3 class="check2">5-Day forcast</h3><div class="row forcastCards"><div class="col"><div class="card"><div class="card-body"><h4>' + data.list[1].weather[0].description + '</h4><h5>High:' + data.list[1].main.temp_max + '°</h5><h5>Low:' + data.list[1].main.temp_min + '°</h5></div></div></div><div class="col"><div class="card"><div class="card-body"><h4>' + data.list[2].weather[0].description + '</h4><h5>High:' + data.list[2].main.temp_max + '°</h5><h5>Low:' + data.list[2].main.temp_min + '°</h5></div></div></div><div class="col"><div class="card"><div class="card-body"><h4>' + data.list[3].weather[0].description + '</h4><h5>High:' + data.list[3].main.temp_max + '°</h5><h5>Low:' + data.list[3].main.temp_min + '°</h5></div></div></div><div class="col"><div class="card"><div class="card-body"><h4>' + data.list[4].weather[0].description + '</h4><h5>High:' + data.list[4].main.temp_max + '°</h5><h5>Low:' + data.list[4].main.temp_min + '°</h5></div></div></div><div class="col"><div class="card"><div class="card-body"><h4>' + data.list[5].weather[0].description + '</h4><h5>High:' + data.list[5].main.temp_max + '°</h5><h5>Low:' + data.list[5].main.temp_min + '°</h5></div></div></div>')
      }
      else{
       
      }
    });
}

