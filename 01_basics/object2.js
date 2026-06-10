//const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "rahul"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "rahul",
            lastname: "shukla"
        }
    }
}
//console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "d"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign(obj1,obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },

    {
        id:2,
        email: "r@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    name: "Js in hindhi",
    price: "999",
    courseIntructor: "Rahul"
}

//course.courseIntructor

const {courseIntructor} = course

console.log(courseIntructor);


// {
//     "name": "Rahul",
//     "coursename": "js in hindhi",
//     "price": "free"
// }