// let | var | const

// scope of variable is bound to a specific { }

// logic outside of blocks is called as "global scope"
// values defined in global scope are availble in the scope but values inside block should not be availble outside block
let a = 100;
var b = 20;
const c = 30;

// logic inside a block is called "block scope"
if(true){
    let a = 10
    // b= 300
}

// console.log(a); // 100
// console.log(b);
// console.log(c);

// var is easily override so never use it 


// ------------ Scope level and mini hoisting ---------------------

function one() {
    const username = "anant"
    function two(){
        const wehbsite ="youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

// basic child function can access the parent function but parent cannot access child.
// function two() can access all the values in one(), but one() cannot access values inside on two()
// line by line execution so two() was never executed.

if (true) {
    const username = "anant"
    if (username==="anant") {
        const wehbsite =" youtube"
        // console.log(username+wehbsite); // anant youtube
        
    }
    // console.log(wehbsite); ReferenceError: wehbsite is not defined
    
}
// console.log(username); ReferenceError: username is not defined


// < Functio hoisiting  >
// function creation : method 1 -- values can be accessed before initialization
addOne(5)
function addOne(num) {
    return num+1
}


// function creation : method 2 -- It's a function sometimes called "expression" - like a variable -- values cannot be accessed before initialization
const addTwo = function(num) {
    return num+2
}