//array

const myArry =[0,1,2,3,4,5 ]

// console.log(myArry);

// //sallow copy shares the same as org i.r same reference
// //deep copy doesnt share the same as org i.e  not same reference 

// const myArry2 = new Array(1,2,3,4,5)
// console.log(myArry2)


//arry methods

// myArry.push(10)
// console.log(myArry)

// myArry.pop(10)

// myArry.unshift(9)

// console.log(myArry.includes(9))
// console.log(myArry.indexOf (0))

const newArry = myArry.join()
console.log(myArry)
console.log(newArry)


//slice , splice

console.log("a", myArry)


console.log(myArry.slice(1,3))

console.log("b", myArry)

console.log(myArry.splice(1,3))

console.log("c" , myArry) //manipulation of orginal arry



