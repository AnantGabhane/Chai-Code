// ...num1 -> rest or spread operator

function calCulateCartPrice(...num1) {
    return num1
}
// console.log(calCulateCartPrice(200,300,400)); // [ 200, 300, 400 ]


// how to pass object in a function 

const user = {
    username : "anant",
    price:200
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} & price is ${anyobject.price}`);   
}
// handleObject(user) // username is anant & price is 200

// how to pass array in a function
const newArray = [200,300,400,500]

function returnSecondElemnt(getArray) {
    return getArray[1]
}
console.log(returnSecondElemnt(newArray)); // 300 
