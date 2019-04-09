const items = document.querySelector(".items-list");
const addItems = document.querySelector(".add-items");
const selection = document.querySelector(".selection");
const addItem = document.querySelector("input[type='submit']");
const addItemValue = document.querySelector("input[type='text']");
addItems.addEventListener("submit", addItemList);
let itemsList = JSON.parse(localStorage.getItem("items")) || [];

function addItemList(e) {
  e.preventDefault();
  let itemValue = {
    done: false,
    item: addItemValue.value
  };
  itemsList.push(itemValue);
  renderList(itemsList, items);
  addItems.reset();
  localStorage.setItem("items", JSON.stringify(itemsList));
}

function renderList(data = [], htmlContainer) {
  let listItems = data
    .map(
      (item, i) => `
    <li>
    <input type="checkbox" data-check=${i} id="item-${i}" ${
        item.done ? "checked" : ""
      }/>
    <label for="item-${i}">${item.item}</label>
    </li>
    `
    )
    .join("");
  htmlContainer.innerHTML = listItems;
}
items.addEventListener("click", selectItem);
function selectItem(e) {
  if (!e.target.matches("input")) return;
  itemsList[e.target.dataset.check].done = !itemsList[e.target.dataset.check]
    .done;
  renderList(itemsList, items);
  localStorage.setItem("items", JSON.stringify(itemsList));
}

selection.addEventListener("click", selectAllItems);
function selectAllItems(e) {
  if (!e.target.matches("input")) return;
  if (e.target.id === "sellectAll") {
    itemsList.forEach(item => {
      item.done = true;
    });
  }
  if (e.target.id === "unselectAll") {
    itemsList.forEach(item => {
      item.done = false;
    });
  }
  if (e.target.id === "sellectAll") {
    itemsList.forEach(item => {
      item.done = true;
    });
  }
  renderList(itemsList, items);
  localStorage.setItem("items", JSON.stringify(itemsList));
}

renderList(itemsList, items);
