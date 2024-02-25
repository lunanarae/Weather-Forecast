function search(event) {
  event.preventDefault();
  let searchFormInputElement = document.querySelector("#search-form-input");
  let locationElement = document.querySelector("#location");

  locationElement.innerHTML = searchFormInputElement.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", search);

let apiKey = "033b43a04493c2b0f53e8fe8bdote92d";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=${location}&key={apiKey}&unit=metric";
