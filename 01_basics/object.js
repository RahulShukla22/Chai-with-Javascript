//singleton
//object.create


//object literals

const mySym = Symbol("key1")


const jsuser = {
    name: "rahul",
    "full name": "Rahul Shukla",
    [mySym]: "mykey1",
     age: 20,
     location: "pune",
     email: "rahul123@gmail.com",
     isLoggedIn: false,
     lastLoginDays: ["Monday","Saturday"]

}
   // console.log(jsuser.email)
    console.log(jsuser["email"])
    console.log(jsuser["full name"])
    console.log(jsuser[mySym])
    console.log(typeof jsuser[mySym])

    jsuser.email = "rahul.chatgpt.com"
    //Object.freeze(jsuser)
    jsuser.email = "rahul@microsoft.com"
    console.log(jsuser);

    jsuser.greeting =  function(){
        console.log("heloo JS user");
    }

    jsuser.greetingTwo = function(){
        console.log(`hello js user, ${this.name}`);
    }
    console.log(jsuser.greeting());
    console.log(jsuser.greetingTwo());
