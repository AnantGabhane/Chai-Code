class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Logged in as ${this.username}`);
    }
    // static - if we don't want to give access to all the objets that are instantiated from this class
    // static stops this from happening
    static createID() {
        return "123"
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}
const iphone = new Teacher("iphone", "i@phone.com", "123")
iphone.addCourse() // A new course was added by iphone
iphone.logMe() // Logged in as iphone
console.log(iphone.createID()); // TypeError: iphone.createID is not a function

const anant = new User();
// console.log(anant.createID());
