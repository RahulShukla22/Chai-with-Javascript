function sayMyname(){
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("U");
    console.log("L");
}

//sayMyname();

// function addtwoNumber(number1,number2){
//    console.log (number1 + number2);
// }

// addtwoNumber(3,5);

function addtwoNumber(number1,number2){
//   let result = number1 + number2
//   return result
return number1 + number2
}
const result = addtwoNumber(3,5);

//console.log("Result:", result);

function loginuserMessage(username = "sam"){
    if(username=== undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged In`
}
//console.log(loginuserMessage("Rahul"))
console.log(loginuserMessage("hitesh"))