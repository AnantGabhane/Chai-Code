//ES6

// class User1 {
//     // called when new keyword is passed 
//     constructor(name, email, password) {
//         this.name = name;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeUsername() {
//         return `${this.name.toUpperCase()}`
//     }
// }
// const chai = new User1("chai", "chai@gmail.com", "123")
// console.log(chai.encryptPassword());;
// console.log(chai.changeUsername());;


// Behind the scenes
function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password
}
User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
User.prototype.changeUsername = function () {
    return `${this.name.toUpperCase()}`
}
const tea = new User("tea", "tea@gmail.com", "12334")
console.log(tea.encryptPassword());; // 12334abc
console.log(tea.changeUsername());; // TEA