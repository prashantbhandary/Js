/*

js execution context

{} = > global THIS ..this
..single threaded.. js

1. global execution context
2. funtion execution conetext
3. eval  ececution context



{} => memory creation phase
            thau allocation , memory allocation
    => execuation phase
            plus minus all

1.  global execution context => thhiss
2. memory phase 
    => val1 undefined 
        val2 undefined
        addnum => defination
        res1 undefined
        res2 = undefined
    
2. execuation phase
    => val1 10
    =? val2 4
    add => new variable environment+ execuation thread



*/

let va1=10;
let val2=5;

function addnum(val1, val2){
    let total= val1+val2 
    return total
}
let res= addnum(val1,val2)
let res2 = addnum(10,2)


// call stack
// gloabal executaion
//one()
//first go last out
//lifo