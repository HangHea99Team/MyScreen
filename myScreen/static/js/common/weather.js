
const API_KEY = "37aa596bd428518cd7d353ef2a53b510"
function onGeopass(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector('#weather_container span:first-child')
        const city = document.querySelector('#weather_container span:last-child')
        console.log(weather, city)
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        });
}
function onGeoError(){
    alert("날씨를 나타낼 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeopass, onGeoError);

// const searchBtn = document.getElementsByClassName('header_form-container')
// const weatherBtn = document.getElementById('weatherBtn')
// function turnToActive(){
//     searchBtn.classNme = 'header_form-container-active'
// }
// function showWeather(){
//     $.ajax({
//     type : "GET",
//     data : {},
//     url : "https://goweather.herokuapp.com/weather/Seoul",
//     success : function(response){
//         console.log(response)
//         }
//     })
// }

// searchBtn.addEventListener('click', turnToActive)
// weatherBtn.addEventListener('click', showWeather)