const User = {
    _email: 'h@h.com',
    _password: "abc",

    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this._email = value
    }
}
// new is a constructor function
// likewise we have factory functions such as Object.create 
const tea = Object.create(User)
console.log(tea.email); // H@H.COM


/*
we use _email -> _ to indicate that this is a private property

getters and setters are special kinds methods that are applied on top of property

getters and setters are used to override the operation of fetching values from memory

getter - get method is used to fetch value from memory
setter - set method is used to set value in memory
for setter email is not a property but a method
*/