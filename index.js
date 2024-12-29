async function getWeather(place){
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=SGHTYEA8MDGZ5XUUZHVMH2ZJV`, {mode: 'cors'})
    const weatherInfo = await response.json();
    const location = weatherInfo.address
    const datetime = weatherInfo.days[0].datetime
    const highTemp = weatherInfo.days[0].tempmax
    const lowTemp = weatherInfo.days[0].tempmin
    const temp = weatherInfo.days[0].temp
    const description = weatherInfo.days[0].description
    console.log(weatherInfo)
    console.log(highTemp)
    console.log(datetime)
    console.log(lowTemp)
    console.log(temp)
    console.log(description)
    console.log(location)
}


getWeather("Carson, CA")
getWeather("Charlotte, NC")
const weatherInput = document.getElementById("Place")
const submitButtonforWeather = document.getElementById("Snake")

const weatherDiv = document.createElement("div")

submitButtonforWeather.addEventListener("click",() =>{
    e.preventDefault

})