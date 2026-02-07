//Same value being returned
// const products = ["Desktop","Laptop","Mouse","Keyboard","Printer"]
// const newArray = products.map((value)=>{
//     return value
// })
// console.log(newArray)

//Modified value is returned
const numbers = [5,7,3,2]
const newArray = numbers.map((value=>{
    return value + 2
}))
console.log(newArray)