 
 
 var weather={
apikey:"8e05b34c0dc711e7613fd1416c13ad39",
fetchWeather: function (city) {
    fetch(
    "https://api.openweathermap.org/data/2.5/weather?q="
     + city
     + "&units=metric&appid="
     +  this.apikey
    )
    .then((response)=> response.json ())
    .then((date) => this.displayWeather(date)); 
},

displayWeather: function (data) {
    const {name} = data;
    const { icon , description} = data.weather[0];
    const {temp, humidity } = data.main;
    const {speed} = data.wind;
    console.log(name,icon, description,temp, humidity,speed);
    document.querySelector(".city").innerText = "weather in" + name;
    document.querySelector(".icon").scr ="https://openweathermap.org/img/wn/"
     + icon + "@2x.png";
    document.querySelector(".description").innerText =description;
    document.querySelector(".humidity").innerText = "humidity :"+ humidity + "%";
    document.querySelector(".wind").innerText ="wind speed:" + speed + "Km/h" ;
    document.querySelector(".temp").innerText =temp + " c";
},
 search: function () {
   this.fetchWeather(document.querySelector(".search2").value);
 }, 
};
 document
 .querySelector (".search button")
 .addEventListener("click", function () {
    weather.search();
 });

 document
 .querySelector(".search2")
 .addEventListener("Keyup", function tttt(event) {
    if (event.Key =="Enter") {
       weather.search(); 
    }
    
 });
 
