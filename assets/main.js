var apiKey = "7c5b99b6cf3d81cc560c1abaf51f3da7"
var searchForm =  document.querySelector(".searchForm").value
var search ="london"

console.log(searchForm);

// fetch("https://api.openweathermap.org/data/2.5/weather?q="+search+"&units=imperial&appid="+apiKey , {
  

// })
// .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     //   object 
//     console.log(data);
//     // feels like temp 
//     console.log(data.main.feels_like +"°");
//     // actual temp 
//     console.log(data.main.temp +"°");
//     // humidity 
//     console.log(data.main.humidity +"%")
//     // weather discription ie partly cloudly 
//     console.log(data.weather[0].description)
//   });


// //   5 day forcast working just need to work out the dot notation
// fetch("https://api.openweathermap.org/data/2.5/forecast?q="+search+"&units=imperial&cnt=5&appid="+apiKey , {

// })
// .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     //   object 
//     console.log(data);
//   });