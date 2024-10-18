console.log("2" >1 )

// console.log("02">1)

console.log(null>0)
console.log(null==0)
console.log(null>=0)

//=== check the both datatypes and compariosn
console.log("2" === 2);


// data types - summery
/*
primitive
7 types;
string;
number;
boolearn;
null;
undefined;
symbol;
bigint;

reference type( non primitive)
Array, Objects, Funtions


*/ 
const hero = ["saktiman", , "batman"]
const myobj = {
    name:"prashant",
    age: 19,
    address:"pokhara"
}

const myfun = function(){
    console.log("hello my fun")
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack, heap

//stack (primitive)
//heap (non primitive) reff in org value

let myYt= "prashant"
let anothername= myYt
anothername = "beat gaming"

console.log(myYt)
console.log(anothername)

let user1 ={
    email: "user@prashant.com",
    id: "user@123"
}
let user2 = user1

user2.email ="prasahnt@gmail.com"

console.log(user1.email) //returns the same email i.e changed
console.log(user2.email)

