// immediately invoked function expression (IIFE)

// To stop pollution from global scope like var declared and creates a separate scope of function; directly run that

// normal functiion

// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai()

// iife function
(function chai() {
  console.log(`DB CONNECTED`);
})();

// first () function definition second () function execution 
(function chai2() {
    // this is a named iife
    console.log(`DB CONNECTED2`);
  })();

// arrpw function 
( () => {
    console.log(`DB CONNECTED3`);
  })();

// passing a parameter here to a function 
( (name) => {
    // this is a normal iife
    console.log(`DB CONNECTED3 ${name}`);
  })('anant');