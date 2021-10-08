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
// works but neet to fix css 
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


console.log(pastSearch.length)

searchForm.addEventListener("submit", submit);
// window.onload(makeBtns)


function getWeather(){
fetch("https://api.openweathermap.org/data/2.5/weather?q="+search.value+"&units=imperial&appid="+apiKey , {


})
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //   object 
    console.log(data);
    // feels like temp 
    var temp =document.querySelector("div.mainSection.h1")
    document.querySelector("div.mainSection").replaceChild(temp2,temp)
    var temp2 = data.main.feels_like +"°"
    console.log(data.main.feels_like +"°");
    // actual temp 
    console.log(data.main.temp +"°");
    // humidity 
    console.log(data.main.humidity +"%")
    // weather discription iE partly cloudly 
    console.log(data.weather[0].description)
  });


//   5 day forcast working just need to work out the dot notation
fetch("https://api.openweathermap.org/data/2.5/forecast?q="+search.value+"&units=imperial&cnt=5&appid="+apiKey , {

})
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //   object 
    console.log(data);
  });
}

