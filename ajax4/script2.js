"use strict";
const debug = true;
let weerButton = document.getElementById('weatherButton');
let weerButton2 = document.getElementById('weatherButton2');
let weatherTickerTape = document.getElementById('weatherTickerTape')
let completeWeatherHere = document.getElementById('completeWeatherHere')
weerButton.addEventListener('click', getWeather);
weerButton2.addEventListener('click', getWeather2);
weatherTickerTape.addEventListener('click', getWeatherTicker);
let apiAddress = "http://weerlive.nl/api/json-data-10min.php?key=";
let key = "demo";
let locatie = "&locatie=";
let GeoLocation = "Amsterdam" ;
let url = apiAddress + key + locatie + GeoLocation;
function getWeather(){
	weatherHere.innerHTML = "";
	makeAjaxCall(url, "GET"). then (showWeather, errorHandler);
}
function getWeather2(){
	weatherHere.innerHTML = "";
	makeAjaxCall(url, "GET"). then (showWeather2, errorHandler);
}
function getWeatherTicker(){
	weatherHere.innerHTML= "";
	makeAjaxCall(url, "GET"). then (tickerWeather, errorHandler);
}
