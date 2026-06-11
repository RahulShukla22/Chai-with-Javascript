const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`user power: ${power}`);
}

//console.log(`user power: ${power}`);

const balance = 1000

//if(balance > 500) console.log("test");

if (balance < 500) {
    console.log("less than")
} else if ( balance < 750){
    console.log("less than 750")
} else if (balance <900){
    console.log("less than 900")
} else if (balance < 1200){
    console.log("less than 1200")
}

const userLoggedIn = true
const debitcard = true
const LoggedInFromGoogle = false
const LoggedinFromEmail = true

if(userLoggedIn && debitcard && 2==2){
    console.log("allow to buy courses")
}

if (LoggedInFromGoogle || LoggedinFromEmail ){
    console.log("user logged in")
}