function ChangeCityName(event) {
  event.preventDefault();
  let cityname = document.querySelector("#city");
  let citySearchInput = document.querySelector("#search-input");
  cityname.innerHTML = citySearchInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", ChangeCityName);
