const people = [
  { name: "mike", year: 1947 },
  { name: "tony", year: 1999 },
  { name: "tania", year: 2000 },
  { name: "abel", year: 2015 },
  { name: "john", year: 1756 }
];

const comments = [
  { text: "i love chennai", id: 193628 },
  { text: "cooking is my favorite", id: 193628 },
  { text: "running makes me happy", id: 145624 },
  { text: "eating healthy is good", id: 174938 },
  { text: "singing is my hobby", id: 836219 }
];

// Array some() & Every() method, return true is there is/are adult

const isAdult = people.some(
  people => new Date().getFullYear() - people.year >= 18
);
const allAdult = people.every(
  people => new Date().getFullYear() - people.year >= 18
);

console.log(isAdult);
console.log(allAdult);

// Array find() method , finds first instead of all ( filter gets all)

const comment = comments.find(comment => (comment.id = 193628));

console.log(comment.text);

// Array indexOf() method

const index = comments.findIndex(comment => comment.id === 145624);
console.log(index);

// alternate to splice method

const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
console.table(comments);
console.table(newComments);
