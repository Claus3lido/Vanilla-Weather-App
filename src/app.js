let currentTime = new Date();
let date = document.querySelector("#date");
date.innerHTML = formatDate(currentTime);
function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[day];
  return ` ${currentDay} ${hours}:${minutes}`;
}

let apiKey = "2d96d64425dca1d6eda00d942a281c0d";
