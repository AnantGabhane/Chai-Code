function multiply5(num) {
    return num * 5
}
multiply5.power = 2

console.log(multiply5(5)); // 25
console.log(multiply5.power); // 2
console.log(multiply5.prototype); // {}

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);

}
const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)
chai.printMe() // price is 25 
// this - acts as whoever calls me I'm gonna go to them and do the job