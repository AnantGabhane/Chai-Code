// In js, master 2 topics, objects and events 

//  2 ways to define a object 
//      1. Literal -> cannot create a singleton object
//      2. constructor -> create a singleton object everytime, have multiple instances of same object

// singleton is a unique instance of it;s type 

// defining a singleton object - it;s basically a key value pair
const mySym = Symbol("key1")

const jsuser = {
    name : "anant",
    surname :"gabhane",
    age: 24,
    [mySym] :"key1111",
    isLogged :false
}

// accessing the object values
// console.log(jsuser.age); // 24
// console.log(jsuser["age"]); //24

// console.log(jsuser[mySym]);

// changing the object values
jsuser.age =2222
// console.log(jsuser["age"]);

// cannot change values of this object now
// Object.freeze(jsuser)

jsuser.greeting = function(){
    console.log("hey js user");
}
console.log(jsuser.greeting());

// ` ` -> string interpollation, you can add valuese same like fstrings

// this is used to reference the same 0bject, using this you can access all the properties from this object
jsuser.greeting2 = function(){
    console.log(`hey js user ${this.name}`);
}
console.log(jsuser.greeting2());
