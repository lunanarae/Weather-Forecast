function currentWeatherDetails(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#location");
  let weatherCondition = document.querySelector("#condition");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#current-time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  console.log(response.data);
  weatherCondition.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  temperatureElement.innerHTML = `${Math.round(temperature)}°C`;
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}
function searchCity(city) {
  let apiKey = "033b43a04493c2b0f53e8fe8bdote92d";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentWeatherDetails);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${day}, ${hours}:${minutes}`;
}
function search(event) {
  event.preventDefault();
  let searchFormInputElement = document.querySelector("#search-form-input");
  searchCity(searchFormInputElement.value);
}
function displayForecast() {
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="weather-forecast-day">
         <div class="weather-forecast-date">${day}</div>
        <div class="weather-forecast-icon">🌤️</div>
         <div class ="weather-forecast-temperature">
         <span class="max-temp">18°</span>
         <span class="min-temp">12°</span>
         </div>
         </div>`;
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", search);

searchCity("Perth");
displayForecast();
