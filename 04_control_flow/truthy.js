const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

//Object.keys(emptyObj) this returns a arry of the object

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined
//

let val;
// val = 5 ?? 10   // returns 5

// val = null ?? 10  //returns  10 
                        // to overcome error
 

// val = undefined ?? 15      // returns 15
val = null ?? 10 ?? 20   //returns 10

console.log(val);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")