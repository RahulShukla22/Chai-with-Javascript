const books = [

   
     { title: 'book one', genre: 'fiction' , publish: 1981 , edition:2004},

      { title: 'book two', genre: 'non fiction' , publish: 1992 , edition:2008},

       { title: 'book three', genre: 'history' , publish: 1999, edition:2007},

        { title: 'book four', genre: 'non fiction' , publish: 1989, edition:2010},

         { title: 'book five', genre: 'science' , publish: 2009, edition:2014},

          { title: 'book six', genre: 'fiction' , publish: 1987, edition:2010},

           { title: 'book seven', genre: 'history' , publish: 1986, edition:2096},

            { title: 'book eight', genre: 'science' , publish: 2011, edition:2016},

            { title: 'book nine', genre: 'non fiction' , publish: 1981, edition:1989},
];

//let userBooks = books.filter( (bk) => bk.genre === 'history')

//userBooks = books.filter( (bk) => { return bk.publish >= 2000})

userBooks = books.filter( (bk) => { return bk.publish >= 1995  && bk.genre === "history" })

console.log(userBooks);


const myNumber = [1,2,3,4,5,6,7,8,9,10]

//const newnums = myNumber.map( (num) => num + 10)

const newnums = myNumber
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >=40)
console.log(newnums);



//reduce

const myNums = [1,2,3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
},0)
console.log(myTotal); 


const shoppingCart = [
    {
        itemName: "js course",
        price:  2999
    },
    
        {
            itemName: "python",
              price:      3999 
        },

     {
        itemName: "mobile dev couse",
        price:      5999
     },

      {
        itemName: "data science",
        price:     129999
    }
   
]

const pricetopay = shoppingCart.reduce( (acc,item)=> acc+item.price ,0)

console.log(pricetopay);