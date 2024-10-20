//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

//later on concept;;;;

//dom document model


//nested scope-- 

function one(){
    const username = "prashant"
     

        function two(){
            const website = "youtube"
            console.log(username);
        }
        // console.log(website); //we cant access username

        two() //access username...

}

// one() just funtion execute..

if (true) {
    const username = "prashant "
    if (username === "prashant") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

//addone...
console.log(addone(5))

function addone(num){
    return num + 1
}


//hosting //executaion..etc etc later on
addTwo(5)// we cant usee before decleration
const addTwo = function(num){
    return num + 2
}