function add2num (num1, num2){
    return num1 + num2
}

const result = add2num(1,7)

// console.log(result)


// function loggedIn(name = "User"){
//     return `${name} is logged in.`
// }

// console.log(loggedIn()); 

function calculatorCreatePrice(...num){
    let element = 0
    for (let i = 0; i < num.length; i++) {
        element = num[i]+element;
        
    }
    return element
}

console.log(calculatorCreatePrice(200,400,500,900));


const obj = {
    name: "Mandeep Bisht",
    price: 199
}

function greetings(data){
    return `Hello ${data.name}, The price of your wathch is ${data.price}`
}

console.log(greetings(obj));