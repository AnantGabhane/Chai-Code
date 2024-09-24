// function is a package of code that can be used anywhere in the program.


// defining a function

function sayMyName(){
    console.log("Anant");
}

// sayMyName -> reference to a function

// sayMyName()


// inputs to a function < while defining > is called parameters
function addTwoNumbers(num1, num2){
    console.log(num1+num2);
}
// inputs to a function < while calling > is called arguments
addTwoNumbers(2,"3")


function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1+num2
}
const result = addTwoNumbers(2,5)
// console.log("Result: ", result);


function  justLoggedIn(username) {
    // if(!username)
    if(username === undefined){
        console.log("please define a username");
        return
    }
    return `${username} just logged in`
}
console.log(justLoggedIn()); // undefined

// If no value is passed in a function then it takes it as < undefined >