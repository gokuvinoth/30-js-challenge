let aString = "morning";
let aNumber = 88;
let anArray = ["singer", "dancer", "waiter"];
let anObject = {
  name: "dhoni",
  age: 39,
  jersey: 7
};

// copy string and number
console.log(
  "%c Strings and numbers copies and creates as new",
  (style = "color:red;font-size:2em")
);
let aString2 = aString;
console.log(aString, aString2);
aString = "evening";
console.log(aString, aString2);

let aNumber2 = aNumber;
console.log(aNumber, aNumber2);
aNumber2 = 8;
console.log(aNumber, aNumber2);
aNumber = 20;
console.log(aNumber, aNumber2);

//copy Array
console.log(
  "%c Arrays will always refer to the original by default",
  (style = "color:red;font-size:2em")
);

let anArray2 = anArray;
console.log(anArray, anArray2);
console.log(anArray, anArray2);

// methods to have a copy

let anArray3 = [...anArray];
anArray3.push("fighter");
console.log(anArray, anArray3);

let anArray4 = anArray.slice();
anArray4.push("fighter");
console.log(anArray, anArray4);

let anArray5 = Array.from(anArray);
anArray5.push("fighter");
console.log(anArray, anArray5);

//copy an object

console.log(
  "%c objects will always refer to the original by default",
  (style = "color:red;font-size:2em")
);

let anObject2 = anObject;
anObject2.team = "India";
console.log(anObject, anObject2);

let anObject3 = Object.assign({}, anObject, { position: "Captain" });
anObject3.nickName = "Thala";
console.log(anObject, anObject3);

// not recommended method
let anObject4 = JSON.parse(JSON.stringify(anObject));
anObject4.nickName = "Thala";
console.log(anObject, anObject4);

// shall copy nested objects will fail as its reference
let anObject5 = { ...anObject };
anObject5.nickName = "Thala";
console.log(anObject, anObject5);
