// introduction to array -> variable containing - collection of multiple data items 

// array contains elements 
// - array copy operations performs shallow copies -> whose property share the same ref point 
// changes made are reflected in original arrays. 

const myArray = [0,1,2,3,4]
// console.log(myArray); //[ 0, 1, 2, 3, 4 ]

const myArray2 = new Array(1,2,3)
// console.log(myArray2);

// array methods
// myArray2.push(4) // add element at the end of the array
// console.log(myArray2);
// myArray2.pop() // remove element from the end of the array


// myArray2.shift()
console.log(myArray2.includes(2));
//slice -> does not manipulate original array

// splice -> does manipulate original array