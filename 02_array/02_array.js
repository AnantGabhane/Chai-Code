// array.push(newarray) -> pushes on existing array

// array.concat(newarray) -> created a new array

const array1 = [1,2,3,4]
const array2 = [5,6,7,8]
const combo = array1.concat(array2)
console.log(combo); // both arrays are merged here and new array is created

// .flat -> in we have nested array in an array then it spreads those arrays into single 

console.log(Array.isArray("anant")); // false
console.log(Array.from("anant")); // [a,n,a,n,t]

let first = 1
let first1 = 2
console.log(Array.of(first, first1)); //[1,2]


