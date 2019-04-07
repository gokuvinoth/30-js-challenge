/* Get Our Elements */
let mouseDown = false;
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

console.dir(video);
function playPause() {
  video.paused ? video.play() : video.pause();
}

function updateIcon() {
  toggle.innerHTML = this.paused ? "▶" : "⏸";
}

function seek() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function changeRate() {
  video[this.name] = this.value;
}

function handleProgressBar() {
  progressBar.style.flexBasis = `${(video.currentTime / video.duration) *
    100}%`;
}
function updateProgressBar(e) {
  console.log("hi");
  video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

video.addEventListener("click", playPause);
video.addEventListener("play", updateIcon);
video.addEventListener("pause", updateIcon);
video.addEventListener("timeupdate", handleProgressBar);

toggle.addEventListener("click", playPause);

skipButtons.forEach(button => button.addEventListener("click", seek));

ranges.forEach(button => button.addEventListener("input", changeRate));

progress.addEventListener("click", updateProgressBar);
progress.addEventListener("mousemove", e => mouseDown && updateProgressBar(e));
progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mouseup", () => (mouseDown = false));
// progress.addEventListener("mouseout", () => (mouseDown = false));
