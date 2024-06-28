//This is singleton Object

const obj = {
    name : "Mandeep",
    email : "mandeepbisht@gmail.com",
    number: 98082343433,
    "full name": "Mandeep Bisht"

}

// console.log(obj.name)
// console.log(obj["full name"])

// obj.email = "mandeep@gmail.com"

// console.log(obj.email)

// Object.freeze(obj)

// obj.email = "m123@gmail.com"
// console.log(obj.email)

// obj.greeting = function(){
//     console.log(`Hello ${this.name}`)
// }

// console.log(obj.greeting())

// const obj2 = {
//     a: "help",
//     b: "no Help"
// }

// const obj3 = {...obj, ...obj2}

// console.log(obj3)

const course = {
    courseName: "Js in Hindi",
    price: 999,
    courseInstructor: "Hitesh"
}

// const {courseInstructor, price, courseName} = course

const {courseInstructor: instructor, price, courseName} = course

console.log(instructor)

console.log(price)

console.log(courseName)