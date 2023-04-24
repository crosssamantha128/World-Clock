function updateTime() {
  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTime.format("Do MMMM YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format("HH:mm a");
  }
  //London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTime.format("Do MMMM YYYY");
    londonTimeElement.innerHTML = londonTime.format("HH:mm a");
  }
}

function updateSelectCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div id="cities">
        <div class="city">
          <div class="place">
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("Do MMMM YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm a")}</div>
        </div>`;
}
updateTime();
setInterval(updateTime, 1);

let citySelectElement = document.querySelector("#citiesSelect");
citySelectElement.addEventListener("change", updateSelectCity);
