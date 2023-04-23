setInterval(function () {
  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = document.querySelector(".sydneyDate");
  let sydneyTimeElement = document.querySelector(".sydneyTime");
  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("Do MMMM YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format("HH:mm a");

  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = document.querySelector(".londonDate");
  let londonTimeElement = document.querySelector(".londonTime");
  let londonTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonTime.format("Do MMMM YYYY");
  londonTimeElement.innerHTML = londonTime.format("HH:mm a");
}, 1);
