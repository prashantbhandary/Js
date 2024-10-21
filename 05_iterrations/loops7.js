const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, current_value) {
//     console.log(`accumulator: ${accumulator} and current_value: ${current_value}`);
//     return accumulator + current_value
// }, 0)

const myTotal = myNums.reduce( (accumulator, curr) => accumulator+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);