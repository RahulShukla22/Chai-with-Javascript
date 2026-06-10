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


function calculateCardPrice(val1,val2,...num1) {
    return num1
}

//console.log(calculateCardPrice(200,400,500,1000));

const user = {
    username: "divit",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user);
handleObject({
    username: "sam",
    price:  399
})

const myNewArray = [200,400,600,800]
function returnsecondValue(getArray){
    return getArray[1]
}
//console.log(returnsecondValue(myNewArray));
console.log(returnsecondValue([200,400,600,800]));