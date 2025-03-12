// object litral 
const user = {
    name: "anant",
    age: 23,
    email: "anantgabhane@gmail.com",
    address: "shegaon",
    getUserDetails: function () {
        // console.log("Name: ", this.name)
        // console.log("Age: ", this.age)
        // console.log("Email: ", this.email)
        // console.log("Address: ", this.address)
        // console.log(this); // prints object litral as it is 

    }
}
// console.log(user.name) // anant
// console.log(user.getUserDetails()) // anant
// console.log(this); // { }

// new is the construction function who provides ability to create multiple new instances from one object literal 

// construction function - provides new instance
const promiseOne = new Promise(function (resolve, reject) { });

function User(username, loginCount, isLoggedin) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin
    // return this
    // variable    - passed value 
}
const userOne = new User("Anant", 12, true)
const userTwo = new User("Gabhane", 13, false) // values are getting overwritten in this 
console.log(userOne);
console.log(userTwo);


