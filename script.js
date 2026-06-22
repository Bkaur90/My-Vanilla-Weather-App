function ChangeTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let ChangeTemperature = responseesponse.data.temperature.current;
  temperatureElement.innerHTML = Math.round(ChangeTemperature);
  let cityname = document.querySelector("#city");
  let citySearchInput = document.querySelector("#search-input");
  cityname.innerHTML = response.data.city;
  console.log(response.data);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${response.data.wind.speed} km/hr`;
  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = response.data.condition.icon;
  let dayTimeElement = document.querySelector("#day-time");
  let date = new Date(response.data.time * 1000);
  dayTimeElement.innerHTML = DateAndTime(date);
  let IconImage = document.querySelector("#icon");
  IconImage.innerHTML = ` <img src="${response.data.condition.icon_url}" class="iconImage" />`;
}

function DateAndTime(date) {
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
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0 ${minutes}`;
  }
  if (hours < 10) {
    hours = `0 ${hours}`;
  }
  return `${day}, ${hours}:${minutes}`;
}
function ApplyCityAPI(city) {
  let apiKey = "ff2o8b1ffc14490t1c0bba91e21ca53c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(ChangeTemperature);
}

function ChangeCityName(event) {
  event.preventDefault();
  let cityname = document.querySelector("#city");
  let citySearchInput = document.querySelector("#search-input");

  ApplyCityAPI(citySearchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", ChangeCityName);

function ThemeToggle(event) {
  event.preventDefault();
  let body = document.querySelector("body");
  body.classList.toggle("dark-theme");
}
let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", ThemeToggle);
ApplyCityAPI("Toronto");
