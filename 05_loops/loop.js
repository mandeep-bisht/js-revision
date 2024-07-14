// for(let n = 0; n<10; n++){
//     console.log(`${n+1} `)
// }

// const geetings = "Hello World!"

// for(const greet of geetings){
//     console.log(greet);
// }

const map = new Map()
map.set('IN', 'INDIA')
map.set('UA', 'United States of Amarica')
map.set('CH', 'China')

// console.log(map)

//This will only work with map and arrays // Not work in obj
for(const [key,value] of map){
    // console.log(`Key is ${key}, and value is ${value}`)
}

const obj = {
    fname: "Mandeep",
    lname: "Bisht",
    mobileNo: 9273771234 
}


for(const key in obj){
    // console.log(obj[key])
}


const dcHeroes = ["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman"];

dcHeroes.forEach(items => {
    // console.log(items)
});

dcHeroes.forEach((items, index, arr) => {
    console.log (items, index, arr)
})