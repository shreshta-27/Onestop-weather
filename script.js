const apiKey = process.env.API_KEY ;
const apiUrl = process.env.API_URL;
async function fetchWeather(city) {
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
    var data = await response.json();
   console.log(data);
}
fetchWeather('London'); 