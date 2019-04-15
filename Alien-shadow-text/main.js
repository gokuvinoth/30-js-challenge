const stage = document.querySelector(".stage");
const dancer = document.querySelector("h1");
const maxOut = 100;
stage.addEventListener("mousemove", cursorPositon);

function cursorPositon(e) {
  let { offsetWidth: width, offsetHeight: height } = stage;
  let { offsetX: xwidth, offsetY: yheight } = e;
  let xMax = Math.round((xwidth / width) * maxOut - maxOut / 2);
  let yMax = Math.round((yheight / height) * maxOut - maxOut / 2);
  dancer.style.textShadow = `${xMax}px ${yMax}px 0 rgba(0,0,0,1),
                                    ${xMax * -1}px ${yMax *
    -1}px 0 rgba(121,100,210,1),
                                    ${yMax}px ${xMax}px 0 rgba(100,100,0,1),
                                    ${yMax * -1}px ${xMax *
    -1}px 0 rgba(155,100,80,1)`;
}
