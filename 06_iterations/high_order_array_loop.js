// _________________ for of ________________________

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

// Maps - all values are unique and no duplicates
const map = new Map();
map.set("IN", "India");
map.set("EU", "Europe");
map.set("FR", "France");
// Map is not iterable - you cannot iterate over a map

// console.log(map); // Map(1) { 'IN' => 'India' }

// for (const [key, value] of map) {
//     console.log(key, ": ", value);
// }

/*
IN :  India
EU :  Europe
FR :  France
*/

// _________________ for in ________________________

// for in loop on an object
const MyObject = {
  JS: "JavaScript",
  Py: "python",
};
for (const key in MyObject) {
  // console.log(`${key} dot notation is for lang ${MyObject[key]}`);
}
// to get the key of object -> use key
// to get the value for a key -> MyObject[key]

// for in loop on an Array
const myArray = ["abhi", "anant", "hitman"];
for (const key in myArray) {
  // console.log(myArray[key]);
}

/*
abhi
anant
hitman
*/

// __________________ for each _______________________

const coding = ["js", "py", "c", "cpp"];

// this takes a callback function as parameter - callback function does not have a name
// normal function
// coding.forEach( function (item) {
//     console.log(item);
// })

// arrow function
coding.forEach((item) => {
  // console.log(item);
});
/*
js
py
c
cpp
*/

const lang = [
  { language: "java", shortcut: "java" },
  {
    language: "python",
    shortcut: "py",
  },
  {
    language: "javascript",
    shortcut: "js",
  },
];

lang.forEach((item) => {
    console.log(item.language);
})
/*
java
python
javascript
*/