const filterText = document.querySelector(".inputText");
const list = document.querySelector(".dataList");
const apiURL =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(apiURL)
  .then(resp => resp.json())
  .then(cityData => cities.push(...cityData));

filterText.addEventListener("input", renderFilteredData);

function filterCities(filterSearch, cities) {
  return cities.filter(city => {
    const regex = new RegExp(filterSearch, "gi");
    return city.city.match(regex) || city.state.match(regex);
  });
}

function renderFilteredData() {
  if (!this.value) {
    list.innerHTML = `<li>
    filtered <span class="hl">state</span> or <span class="hl">city</span>
  </li>`;
    return;
  }
  const finalData = filterCities(this.value, cities);
  const regex = new RegExp(this.value, "gi");
  const renderHtml = finalData
    .map(
      city =>
        `<li>${city.city.replace(
          regex,
          `<span class="hl">${this.value}</span>`
        )}, ${city.state.replace(
          regex,
          `<span class="hl">${this.value}</span>`
        )} <span class="population">${city.population}</span></li>`
    )
    .join("");
  list.innerHTML = renderHtml;
}
