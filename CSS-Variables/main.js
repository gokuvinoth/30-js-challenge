const inputElemts = document.querySelectorAll(".input-group > input");

function updateValues() {
  const elementValue = `${this.value}${this.dataset.unit || ""}`;
  const elementName = `--${this.name}`;
  document.documentElement.style.setProperty(elementName, elementValue);
}

inputElemts.forEach(inputElement =>
  inputElement.addEventListener("input", updateValues)
);
inputElemts.forEach(inputElement =>
  inputElement.addEventListener("mousemove", updateValues)
);
