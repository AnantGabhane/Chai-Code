/*
types of memory : stack and heap 
    
    - stack 
        All primitive types use stack memory
        you get copy of the variable


    - Heap
        Non primitive types use heap memory
        You get reference of original value so changes would occur in orginal value 

*/

let name1 ="anant"
name2 = "gabhane"

console.log(name1);
console.log(name2);
// changes are made in the copy rather than original variable 

let userOne = {
    email: "anant.com"
}

let userTwo = userOne

userTwo.email ="anant.apexaiq"

console.log(userOne.email);
console.log(userTwo.email);

//changes are made in original value as heap gets to ref of object