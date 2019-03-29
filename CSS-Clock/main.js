const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondsHand = document.querySelector(".seconds-hand");

function clockRun() {
  const timeStamp = new Date();

  const seconds = timeStamp.getSeconds();
  const minutes = timeStamp.getMinutes();
  let hour = timeStamp.getHours();

  hour > 12 ? (hour = hour - 12) : (hour = hour);

  const hourHandDeg = (hour / 12) * 360 + 90;
  const minHandDeg = (minutes / 60) * 360 + 90;
  const secHandDeg = (seconds / 60) * 360 + 90;

  console.log(hourHandDeg + " " + minHandDeg + " " + secHandDeg);

  hourHand.style.transform = `rotate(${hourHandDeg}deg)`;
  minHand.style.transform = `rotate(${minHandDeg}deg)`;
  secondsHand.style.transform = `rotate(${secHandDeg}deg)`;
}

setInterval(clockRun, 1000);
