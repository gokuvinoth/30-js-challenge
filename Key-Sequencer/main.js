let secretKey = "godmodeon";
let cheatString = [];

const randNumber = () => {
  return Math.floor(
    Math.random() * 2 * 100 + Math.random() * 5 * 10 + Math.random() * 5
  );
};
function godModeOn() {
  const rgbaValue = `rgba(${randNumber()},${randNumber()},${randNumber()},0.5)`;
  document.querySelector("body").style.background = rgbaValue;
}
function getKeyStrokes(e) {
  cheatString.push(e.key);
  cheatString.splice(
    -secretKey.length - 1,
    cheatString.length - secretKey.length
  );
  if (cheatString.join("").includes(secretKey)) {
    setInterval(godModeOn, 1500);
  }
}
window.addEventListener("keyup", getKeyStrokes);
