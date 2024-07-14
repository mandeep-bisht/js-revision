const dcHeroes = [
    {
      name: "Superman",
      realName: "Clark Kent",
      power: "Super strength, flight, invulnerability, laser vision",
      affiliation: "Justice League"
    },
    {
      name: "Batman",
      realName: "Bruce Wayne",
      power: "Peak human condition, martial arts, detective skills, technology",
      affiliation: "Justice League"
    },
    {
      name: "Wonder Woman",
      realName: "Diana Prince",
      power: "Super strength, flight, combat skill, lasso of truth",
      affiliation: "Justice League"
    },
    {
      name: "Flash",
      realName: "Barry Allen",
      power: "Super speed, time travel, speed force",
      affiliation: "Justice League"
    },
    {
      name: "Aquaman",
      realName: "Arthur Curry",
      power: "Super strength, aquatic abilities, communication with marine life",
      affiliation: "Justice League"
    }
  ]

dcHeroes.forEach(items => {
    console.log(`Heroes are ${items.name}, and their real name is ${items.realName}`)
})