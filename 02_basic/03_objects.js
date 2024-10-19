//singleton
//object.create => singleton hunxa


//object literals... not singleton..

const sym = Symbol("key1")
const user = {
    name: "prashant bhandari",
    [sym] : "mykey1",                           //to specify it is a symbol..
                                                // else it will be string if we didnt use the sq bkt
    email: "prashant@google.com",
    location: "pokhara",
    age: 19,
    isLogedIn: false,
}

//there are 2 different ways to access thee objects dataa..
console.log(user.email)
console.log(user['age'])
console.log(user[sym]) //accesing symbol.. 


user.email= "prashant@code.com"  //changing the email of object user
console.log(user['email'])    
// Object.freeze(user)           // we can freeze by using object.freeze which doesnt allow any change in the object after applying this

console.log(user)   // result that doesnt change after user of the freeze

user.greeting = function(){

    console.log("hello js user")
}

console.log(user.greeting())

user.greeting2 = function()
{
    console.log(`hello js user ${this.name}`)
}
console.log(user.greeting2())