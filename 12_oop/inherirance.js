class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Logged in as ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password, subject) {
        super(username);
        this.email = email;
        this.password = password;
        this.subject = subject;
    }
    addCourse() {
        console.log(`${this.username} added a new course`);
    }
}
const chai = new Teacher("chai", "chai@teacher.com", "123", "js");
chai.addCourse(); // chai added a new course
const Masalachai = new User("Masalachai");

Masalachai.logMe(); // Logged in as Masalachai

console.log(chai instanceof Teacher); // true
console.log(chai instanceof User); // true
console.log(chai instanceof Object); // true
