//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)


(function chai(){
    console.log(`DB CONNECTED`);

})();

( () => {
    console.log(`DB TWO CONNECTED`);
})();

( (name) => {
    console.log(`DB Three CONNECTED ${name}`);
})('rahul');0