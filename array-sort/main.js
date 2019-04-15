const orginalTitles = [
  "A Question ",
  "Adam's Curse ",
  "Absalom and Achitophel ",
  "The Age of Anxiety ",
  "Aeneid ",
  "Beppo ",
  "After Apple Picking ",
  "Odyssey ",
  "The Betrothed ",
  "The Canterbury Tales ",
  "Brahma ",
  "A Terre ",
  "Cad Goddeu ",
  "Deor ",
  "Shahnameh ",
  "Dies Irae (Hymn) ",
  "Grażyna ",
  "A Difficult Birth, Easter 1998 ",
  "El Golem ",
  "Borodino ",
  "1914",
  "Address to the Deil ",
  "Gododdin ",
  "The Odyssey: A Modern Sequel ",
  "Old English rune poem ",
  "On Another's Sorrow ",
  "The Second Decade ",
  "Sen dollotar Ulaid",
  "Grímnismál "
];

const orginalHtml = document.querySelector("#original");
const sortedHtml = document.querySelector("#sorted");

orginalHtml.innerHTML = orginalTitles
  .map(title => `<li>${title}</li>`)
  .join("");

const regex = new RegExp("the |on |a ", "i");
function arraySort(a, b) {
  if (
    removePreopositions(a).toLowerCase() > removePreopositions(b).toLowerCase()
  )
    return 1;
  else return -1;
}
function removePreopositions(a) {
  return a.replace(regex, "").trim();
}
let sortedTitles = orginalTitles.sort(arraySort);

sortedHtml.innerHTML = sortedTitles.map(title => `<li>${title}</li>`).join("");
