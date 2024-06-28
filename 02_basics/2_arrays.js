const marval = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye", "Spider-Man", "Black Panther", "Doctor Strange"]

const dcHeroes = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern","Aquaman", "Cyborg", "Martian Manhunter","Green Arrow"]
const newHero = ["saktiman", "HERO"]

// marval.push(dcHeroes)
// console.log(marval)

// const allHeroes = marval.concat(dcHeroes)
// console.log(allHeroes)

const allHeroes = [...dcHeroes, ...marval, ...newHero]
// console.log(allHeroes)

console.log(Array.isArray("Mandeep"))//tell its array or not
console.log(Array.from("Mandeep"))//make the string array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
