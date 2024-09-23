// singleton is a unique instance of it;s type
// sigleton object
// const tinderUser = new Object()

// non - sigleton object
const tinderUser = {};
tinderUser.id = "12";
tinderUser.name = "sam";
// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    username: {
      firstname: "anant",
      lastname: "gabhane",
    },
  },
};

// console.log(regularUser.fullname.username);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = {obj1, obj2}
// console.log(obj3); 
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } -> objects are embedded inside one another

// Object.assign() -> copies all enmerable from one or more source to target source (we pass {} as a target object where values will be stored) -- return modified object

// const obj3 = Object.assign({}, obj1, obj2) 
// good to add empty  {} so that it can take one arg as empty

// ... -> spread values to last element 
const obj3 = {...obj1,...obj2}
// console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // [ 'id', 'name' ]
console.log(Object.values(tinderUser)); // [ '12', 'sam' ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '12' ], [ 'name', 'sam' ] ]
// entries convert each value to its own individual array containing key value pairs
console.log(tinderUser.hasOwnProperty('id')) // true
