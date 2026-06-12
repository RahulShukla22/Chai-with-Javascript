1// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5){
//         console.log(" 5 is best number")
//     }
//     console.log(element);
    
// }
//console.log(element);

// for (let index = 0; index <= 10; index++) {
//     console.log(`outer loop value: ${index}`);
//   for (let i = 0; i < 10; i++) {
//    //console.log(`inner loop value ${i} and inner loop ${i}`);
//    console.log(index + '*' + i + '=' + index*i);
    
//   }
    
// }


let myArr = ["Flash","batman","superman"]
console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
    
}


// break and contin=ue 

for (let index = 0; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected 5`);
        break
    }
    console.log(`value of i is ${index}`);
    
}

let index = 0
while (index <= 10){
    console.log(`value of index is ${index}`);
    index = index + 2

}


let myArray = ["flash","batman","superman"]

let arr = 0
while(arr < myArray.length){
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1
}



// do while loop

let score = 1

do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);




