const user = {
    username: "rahul",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

//  user.welcomeMessage();
//  user.username = "sam"
//  user.welcomeMessage()

//console.log(this);


// function chai(){
//     console.log(this);
// }
// chai()

// const chai = function() {
//     let username = "rahul"
//     console.log(this.username);
// }
// chai();

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))

//const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => num1 + num2

const addtwo = (num1,num2) => ({username: "rahul"})


console.log(addTwo(5,6))