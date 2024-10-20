// Immediately Invoked Function Expressions (IIFE)


// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')



(function chai()
{
    console.log(`db connected`)
})();

//global scope ko pollution has problem 
//to removee the any decleration of global pollution 
// we must do

(
()=>{
    console.log(`db connected 222`)
})()
//execute....
