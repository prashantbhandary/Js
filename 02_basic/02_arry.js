const myhero = ['thor', 'ironman ' , 'hulk ' ]
const dc_heroes= ['spiderman' , 'flash ', 'bact man ']
const country = ['nepal', 'india']

// myhero.push(dc_heroes)
// console.log(myhero)




//use concat to merge the 2 different arry in the proper way.......

// const arryn1= myhero.concat(dc_heroes)
// console.log(arryn1)

//sprademethod

//this method is applicable for thee more than 2 arry we can see the example below we merge the three different array in the one single array
const allheros = [...myhero, ...dc_heroes, ...country]
console.log(allheros)


const numbers= [1,2,3 , [5,6 ] , [4,5,[6,7,8,8]]]

console.log(numbers.flat(Infinity))  // make the one array if there is lot of arry in aarry

console.log(Array.isArray("prashant")) // checks wheather the following is the aarry or not...
console.log(Array.from("prasahant")) // cnvt to the arry


//aarry.of is for multiple var to makee..

