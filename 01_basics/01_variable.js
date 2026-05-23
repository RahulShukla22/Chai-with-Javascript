const accountId = 123456
let accountEmail = "rahul@123"
var accountPassword = "12345"
accountCity = "indore"
let accountState;

//accountId = 2 // not allow

accountEmail = "rs@rs.com"
accountPassword = "121212"
accountCity = "bhopal"

console.log(accountId);
/*
prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])