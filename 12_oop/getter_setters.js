/*
- Getters and setters are used in special cases where you want to control properties of class using access control
and if access is given then you can mask it 

- you can apply getters and setters on any variables or properties 

- if you set getter then it's a must to set a setter 

- to get the value outside of a class then we use getter and if you want to set value outside of class 
then we use setter 

- name of the getter and setter should be same as the property defined in constructor 

- We always set the setters and never return them
*/


class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get email() { return this._email.toUpperCase(); }
    set email(value) { this._email = value; }


    get password() { return this._password.toUpperCase(); }
    set password(value) { this._password = value; }
}
const anant = new User("anant@gmail.com", "anant");
console.log(anant.email); // ANANT@GMAIL.COM
console.log(anant.password); // ANANT