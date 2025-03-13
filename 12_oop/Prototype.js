let myName = "Anant"
let myName1 = "Anant         "
// console.log(myName1.length) // 5 14

let myArray = ["thor", "spiderman"]

let myhero = {
    thor: "hammer",
    spiderman: "web",
    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.anant = function () {
    // console.log(`Anant is present in all objects`);
}
myhero.anant();
myArray.anant();

Array.prototype.heyAnant = function () {
    console.log(`Spidy power is web`);
}

// myhero.heyAnant(); throws error
// myArray.heyAnant(); // prints log

// every object is a separate instance they don't share properties they've default properties 

const Teacher = {
    language: 'JS',
    isAvailable: true,
}

const TeachingSupport = {
    isAvailable: true,
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport,
}

// modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Anant      "
String.prototype.trueLength = function () {
    console.log(`${this}`); // Anant      
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength(); // True length is: 5