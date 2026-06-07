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
