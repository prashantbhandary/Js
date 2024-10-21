// for of

//array specifics..
// ["", "", ""]

//objects in array.......
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

//for of loop

for (const num of arr) {
    //console.log(num);
} // return 12345


const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps



const map = new Map() //aafu aauta object ho..

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map); //values are unique returns objectss with keys

//we can print usinf for for
//key in key and vlaues in value
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


//as like wise in map we cannt use in normal objects 
//see in next filee..
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }