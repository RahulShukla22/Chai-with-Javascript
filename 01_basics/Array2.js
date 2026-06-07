const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman","batman","flash"];

//marvel_heros.push("dc_heros");
//console.log(marvel_heros);
//console.log(marvel_heros[2]);


const newArr = marvel_heros.concat(dc_heros);
console.log(newArr);

//spread operator
const all_heros = [...marvel_heros,...dc_heros];
console.log(all_heros);

const anotherArray = [1,2,3,[4,5,6],7[6,7,[4,5]]];
const real_another_array = anotherArray.flat(Infinity);

console.log(real_another_array);
console.log(real_another_array);

console.log(Array.isArray("rahul"));
console.log(Array.from("rahul"));

console.log(Array.from({name : "Rahul"})) // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
