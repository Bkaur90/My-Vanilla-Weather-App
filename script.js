function ChangeCityName(event) {
  event.preventDefault();
  let cityname = document.querySelector("#city");
  let citySearchInput = document.querySelector("#search-input");
  cityname.innerHTML = citySearchInput.value;
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
