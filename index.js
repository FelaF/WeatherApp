async function getWeather(place){
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=SGHTYEA8MDGZ5XUUZHVMH2ZJV`, {mode: 'cors'})
    const weatherInfo = await response.json();
    return {
        location: weatherInfo.address,
        datetime: weatherInfo.days[0].datetime,
        highTemperature: weatherInfo.days[0].tempmax,
        lowTemperature: weatherInfo.days[0].tempmin,
        temperature: weatherInfo.days[0].temp,
        description: weatherInfo.days[0].description
    };
}


getWeather("Carson, CA")
getWeather("Charlotte, NC")
const weatherForm = document.getElementById("myForm")
const weatherButton = document.getElementById("Black")
const weatherInput = document.getElementById("Place")



weatherButton.addEventListener("click", async (e)=> {
    e.preventDefault();
    const weatherData = await getWeather(weatherInput.value)
    console.log("Weather Data:", weatherData)
    const weatherDiv = document.createElement("div")
    Object.entries(weatherData).forEach(([key, value]) => {
        itemDiv = document.createElement("div")
        itemDiv.className = key;
        itemDiv.textContent = `${key}: ${value}`;
        weatherDiv.appendChild(itemDiv)
    })
    document.body.appendChild(weatherDiv)
});



