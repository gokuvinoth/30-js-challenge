function playInstrument(e) {
  const getAudio = document.querySelector(
    `audio[data-key-code="${e.keyCode}"]`
  );
  const currentKey = document.querySelector(
    `.key[data-key-code="${e.keyCode}"]`
  );

  if (!getAudio) return;
  getAudio.currentTime = 0;

  getAudio.play();
  currentKey.classList.add("on");
}

function removeTransition(e) {
  if (e.propertyName != "transform") return;
  this.classList.remove("on");
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playInstrument);
