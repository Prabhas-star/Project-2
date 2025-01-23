function getWeather() {
    const apikey = 'YOUR_API_KEY';
    const city = document.getElementById('city').ariaValueMax;
    if(!city){
        alert('please enter a city');
        return;
    }
    const currentWeatherUrl = 'https:/api,openweathermap.org/data/2.5/weather?q=${city}$appid=${apikey}';
    const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}';
}
fetch(currentWeatherUrl)
    .then(response => response.json())
    .then(data =>{
        displayWeather(data);
    })
    .catch(error =>{
        console.error('Error fetching current weatherr data',error);
        alert('Error fetching current weather data.please try again.');
    });

fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
        displayHourForecast(data.list);
    }) 
    .catch(error => {
        console.error('Error fecthing hourly forecast data:',error);
        alert('Error fecting hourly forecast data.please try again.');
    });
}
function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById(;Weather-info');
        const weatherIcon = document.getElementById('weather-icon');
        const hourlyForecastDiv = document.getElementById('hourly-forecast');
        weatherInfoDiv.innerHTML ='';
        hourlyForecastDiv.innerHTML = '';
        tempDivInfo.innerHTML ='';
}
function displayWeather(data) {
    id=f(data.cold =='404'){
        const cityName=data.name;
        const temperature = Math.round(data.main.temp -273.25);
        const dascripption = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = 'https://openweathermap.org/img/wn/${iconCode}@4x.png';
        const temperatureHTML ='
        <p>${temperature}&C</p>';
        const weatherHTML ='
        <p>${cityName}</p>
        <p>${description}</p>';
        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHTML;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;
    }
}
function displayHourForecast(hourlyData){
    const hourlyForecastDiv = document.getElementById('hourly-forecast');
    const next24Hours = hourlyData.slice(0,8);
    next24Hours.forEach(item => {
        const dateTime = new DataTransfer(item.dt * 1000);
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15);
        const iconCode = item.weather[0].icon;
        const iconUrl = 'https://openweathermap.org/img/wn/${iconCode}.png';
        const hourlyItemHTML ='
        <div class="hourly-item">
        <span>${temperature}&C
        </span></div>';
        hourlyForecastDiv.innerHtml +=hourlyItemHTML;

    });
}
function showImage(){
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block';
}