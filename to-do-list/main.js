const items = document.querySelectorAll(".item > input");

items.forEach(item => item.addEventListener("click", itemCheck));

let lastCheckedItem,
  isInBetween = false;
function itemCheck(e) {
  if (e.shiftKey && this.checked) {
    items.forEach(item => {
      if (item === this || lastCheckedItem === item) {
        isInBetween = !isInBetween;
      }

      if (isInBetween) item.checked = true;
    });
  }
  lastCheckedItem = this;
}
