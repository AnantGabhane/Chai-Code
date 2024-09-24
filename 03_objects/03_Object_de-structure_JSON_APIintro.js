// destructuring of objects

const course ={
    name: "js advanced",
    price: "$99",
    instructor: "anant"
}

// course.instructor

const {instructor} = course

const {instructor :courseInstructor} = course

console.log(instructor); // anant
console.log(courseInstructor); // anant

// destructuring in react

// const navbar = ({company}) => {
// 
// }
// navbar(company="anant")