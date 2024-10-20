const user = {
    username: "hitesh",
    price: 999,


    //for the cureent context so we use this kewword
    
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        //this  => current value
    }
}

//yaha bahira this??? kinaa??


// user.welcomeMessage()
// user.username = "sam" //we cahnge the username
// user.welcomeMessage()

// console.log(this);

// in node env ma it reutrns the {} empty object

//in browser => window object i.e globel object

// function chai(){
//     let username = "prashant"
//     console.log(this.username); => undefined funtion ma we can use only in objectt
    // console.log(this) // reutrns a lot of thinngsss
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addtwo = (num1 , num2)=>{
//         return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach() 