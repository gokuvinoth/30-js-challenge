const canvas = document.querySelector("#pic");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(ctx);
let isDrawing = false;
let lastX = 0,
  lastY = 0,
  hue = 0,
  direction = true;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;

function draw(e) {
  if (!isDrawing) return;
  console.log(e);

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  //   ctx.moveTo(lastX, lastY); // to start from same orgin
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  hue >= 360 ? (hue = 0) : (hue = hue);

  ctx.lineWidth >= 100 || ctx.lineWidth <= 1
    ? (direction = !direction)
    : (direction = direction);

  direction ? ctx.lineWidth++ : ctx.lineWidth--;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseout", () => (isDrawing = false));
canvas.addEventListener("mouseup", () => (isDrawing = false));
