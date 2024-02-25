function search(event) {
  event.preventDefault();
  let searchFormInputElement = document.querySelector("#search-form-input");
  let locationElement = document.querySelector("#location");

  locationElement.innerHTML = searchFormInputElement.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", search);
