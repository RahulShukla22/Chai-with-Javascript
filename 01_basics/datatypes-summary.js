// primitive



// 7 types : String,Number,Boolean,Null,Undefined,Symbol,BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// Reference type(Non Primitive)

//Array,Objects,Functions

const heros = ["shaktiman","Naagraj","doga"];
console.log(heros);

let myObj = {
    name : "Rahul",
    age : 30,
}
console.log(myObj);

const myFunction = function(){
    console.log("Rahul Shukla");
}
console.log(typeof id);


//---------

// stack (primitive), Heap (non primitive)

let myYoutubename = "rahulshukladotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:  "user@email.com",
    upi:  "user@ybl"
}

let userTwo = userOne

//userTwo.email = "rahulshukla@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);