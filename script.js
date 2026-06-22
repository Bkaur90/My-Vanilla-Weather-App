function ChangeTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let ChangeTemperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(ChangeTemperature);
    let cityname = document.querySelector("#city");
    let citySearchInput = document.querySelector("#search-input");
  cityname.innerHTML = response.data.city;

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
