function SetUsername(username) {
    //complex db calls
    this.username = username;
    console.log("called");

}

function CreateUser(username, email, password) {
    // SetUsername(username) if done like this doesn't call function | Holding reference is imp
    // to hold the ref we use call 
    SetUsername.call(this, username)
    this.email = email;
    this.password = password;
}
const chai = new CreateUser("chai", "chai@gmail.com", "123")
console.log(chai);

// .call - passes current execution context to that function