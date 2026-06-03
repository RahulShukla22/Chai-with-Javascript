const name = "Rahul"
const repoCount = 50

//console.log( name  +  repoCount + "value")

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

// another way of creating string with object

const gameName = new String('Rahul Shukla-rs-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('R'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(0,4);
console.log(anotherString);

// slice with negative indices
console.log(gameName.slice(-4,));      // last 4 characters
console.log(gameName.slice(-4, -1));  // last 4 chars excluding the last one

console.log(gameName.slice(-8));


const newStringone = "     Rahul"
console.log(newStringone);
console.log(newStringone.trim());

const url = "www.google%20.com"

console.log(url.replace('%20','-'));
console.log(url.includes('google'));
console.log(url.includes('rahul'));

console.log(gameName.split('-'));