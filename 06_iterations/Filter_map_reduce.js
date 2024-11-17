// for each - loop does not return anything from the array its iterating over
const Mynums = [1, 2, 3, 4, 5, 6];

// array.forEach((item) => {
//     console.log(item);
//     return item
// });

// filter - it takes a callback as parameter and a condition - vlaues that satisfies the condtion those values will be returned
// method 1:
// const result = Mynums.filter( (nums) => nums > 2)

//method 2:
const result = Mynums.filter((nums) => {
  return nums > 2;
});

// console.log(result); //[ 3, 4, 5, 6 ]

// const muNumbers = Mynums.map( (num) => num +10)
// console.log(muNumbers); // [ 11, 12, 13, 14, 15, 16 ]

//chaining map and filter
const muNumbers = Mynums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 31)
// console.log(muNumbers); // [ 31, 41, 51, 61 ]

//reduce function 
/* 
first value of accumulator is equal to initialvalue, after that final sum = accumulator then initial value is not used again
*/

const myNumbers = [1,2,3]

// normal function
// const MyTotal = myNumbers.reduce( function (acc, currentVal) {
//     console.log(`acc is ${acc} and currentval is ${currentVal}`);
    
//     return acc + currentVal
// }, 0)

// arrow function
const MyTotal = myNumbers.reduce( (acc, currentVal) => acc + currentVal, 0)
// console.log(MyTotal); 
/*
acc is 0 and currentval is 1
acc is 1 and currentval is 2
acc is 3 and currentval is 3
6
*/

const shoppingCart = [
  {
    item : "js course",
    price : 999
  },
  {
    item : "py course",
    price : 1999
  },
  {
    item : "rust course",
    price : 2999
  },
  {
    item : "react course",
    price : 4999
  }
]

const totalToPay = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)
console.log(totalToPay); //10996
