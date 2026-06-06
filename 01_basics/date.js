//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let myCreatedDate = new Date(2025,0,23);
//console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date ("2026-01-22");
console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now();
//console.log(myTimestamp);
//console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());