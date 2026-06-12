const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings){
    console.log(`each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "INDIA")
map.set('US', "INITED STATES")
map.set('Fr',"FRANCE")

//console.log(map);

for (const Key of map) {
    console.log(Key);
}
    for (const [Key,value] of map) {
    console.log(Key, ':-' , value);
}

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'Spiderman'
// }

// for (const [key , value] of myObject) {
//     console.log(key, ':-' , value);
    
// }


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}


const programming = ["js", "rb" , "py" , "java" , "cpp"]
for (const key in programming) {
   console.log(key);
   console.log(programming[key]);
    
}


//for each loop

const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function(val){
//  console.log(val);
// })

coding.forEach( (val) => {
    console.log(val);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }

]
myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})
