// const promiseOne = new Promise(function(resolve,reject){

//     //do an async task
//     //db calls, cryptography,network

//     setTimeout(() => {
//         console.log('async task is completes')
//         resolve()
//     }, 1000);
// })


// promiseOne.then(function(){
//     console.log("Promise consumed")
// })


// new Promise(function(resolve,reject){
//     setTimeout(() => {

//         console.log("asyncn task2")
//         resolve()
//     }, 1000);

// }).then(function(){
//     console.log('async 2 resolved.')
// })


// const promiseThree =new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve({username:"prashant", email:"santhprashant@gmail.com "})
//     }, 1000);
// })

// promiseThree.then(function(user){
//     console.log(user)
// })


// const promiseFour = new Promise (function(resolve, reject){
//     setTimeout(() => {
//         let error = false
//         if (!error){
//             resolve({username:"prashant", password:"123"})
//         }
//         else{
//             reject('errror smth went wrong')
//         }
//     }, 1000);
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username)

// })
// .catch(function(error){
//  console.log("error")
// })
// .finally(()=> {
//     console.log('the promise is either rejected or resolved ')
// })



const promiseFive = new Promise(
    (resolve,reject)=>{
        setTimeout(() => {
            let error=true
            if(!error){
                resolve({username:"javascript" , password:"123"})
            }
            else{
                reject('errorrr:  js went wrong')
            }
        }, 1000);
    }
)



async function consumePromiseFive() {
    try {
        const response =await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()



// async function getAlluser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data= await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("e:", error)    
//     }
// }

// getAlluser()


//either this or above one..
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})