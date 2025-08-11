const apiKey = "905d8ee9fef0304a105189a671266bca";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function fetchWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status === 404) {
       document.querySelector(".error").style.display = "block";
       document.querySelector(".weather").style.display = "none";
    }else {
        var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "image/clouds.png"; // put image file path here
    }else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "image/clear.png"; // put image file path here
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "image/rain.png"; // put image file path here
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "image/drizzle.png"; // put image file path here
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "image/mist.png"; // put image file path here
    } else {
        weatherIcon.src = "image/default.png"; // put a default image file path here
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
}

searchBtn.addEventListener("click", () => {
    fetchWeather(searchBox.value);
});
