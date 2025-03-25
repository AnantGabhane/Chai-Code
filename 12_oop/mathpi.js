// console.log(Math.PI); // 3.141592653589793 - cannot change this 
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor); // { value: 3.141592653589793, writable: false, enumerable: true, configurable: false }
// this is a object
const chai = {
    name: "chai",
    price: 24,
    isAvailable: true,
    orderChai: function () {
        console.log("chai is available");

    }
}
// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name")); // { value: 'chai', writable: true, enumerable: true, configurable: true }
Object.defineProperty(chai, "name", {
    // cannot change the value of isAvailable
    writable: false, // stops from updating the value
    enumerable: false // stops from iterating over the value
})
// console.log(Object.getOwnPropertyDescriptor(chai, "isAvailable")); // { value: true, writable: false, enumerable: false, configurable: true }

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(key, value);
    }
}

/*
price 24
isAvailable true
*/