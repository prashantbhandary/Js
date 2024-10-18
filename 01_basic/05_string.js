const name ="prashant-pb"
const repocount= 50

// console.log(name+ repocount + " value")


console.log(`hello my name is ${name} and my repo count is ${repocount}`)

const gameName = new String('prashant-pb')

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('t'));
console.log(gameName.charAt(2));

const newstr= gameName.substring(0,5)

console.log(newstr)


const anotherstr = gameName.slice(-7,5)
console.log(anotherstr)


const newstr1 = "    pras   hant.    "

console.log(newstr1);

console.log(newstr1.trim());

const url ="https://prashnat.com/hitesh%20bhandari"

console.log(url.replace('%20','+'));
console.log(url.includes('%20'));
console.log(gameName.split("-") );
