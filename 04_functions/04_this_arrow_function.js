// This -> used to refer current context (values) - using this keyword I can access all the variables inside the object in object scope
const user = {
    username : "Anant",
    price: 99,
    welcomeMessage : function() {
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
    }
}
// user.welcomeMessage() //Anant welcome to the website
user.username = "abhi"
// user.welcomeMessage()//abhi welcome to the website

// < cannot use this inside of a function>
// function chai() {
//     let username="anant"
//     console.log(this.username);
// }
// chai() //undefined


/*
< cannot use this inside of a function assigned to a constant>
const chai = function() {
    let username="anant"
    console.log(this.username);
}
chai() //undefined
*/

//< arrow function>

const chai = () => {
    let username="anant"
    console.log(this.username);//undefined
    console.log(this); //{}
}
chai()

// <arrow function syntax>

// Method 1 : defining arrow function : Explicite return 

// const addTwo =(num1, num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4)); //7

// Method 2 : defining arrow function : Implicite return 
// const addTwo =(num1, num2) =>num1+num2
// const addTwo =(num1, num2) =>(num1+num2) no need to use return keyword


// returning object
const addTwo =(num1, num2) =>({username:"anant"})
console.log(addTwo(3,4)) //{ username: 'anant' }
