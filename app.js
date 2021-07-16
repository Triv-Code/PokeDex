var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

// const form = document.querySelector('form');
// const input = document.querySelector('input');
// let curPoke = document.getElementById('name');

// Add Event Listener for Pokemon Input
// Empty Array for Pokemon Data
// let currentPoke = []
// Promise for Async
let poke = new Promise((resolve, reject) => {
    resolve(
        P.getPokemonByName('1')
            .then(data => currentPoke = data)
    )    
})

// poke
// .then(P.resource('/api/v2/type/' + currentPoke[0].id + '/')
//     .then(data => console.log(data.damage_relations)))
let pokeName = poke.then(poke => currentPoke.name) 
// poke.then(poke => console.log('Name: ' + currentPoke.name))                   // Pokemon Name
// poke.then(poke => console.log('Type 1: ' + currentPoke.types[0].type.name))                // Pokemon Type 1
// poke.then(poke => console.log('Type 2: ' + currentPoke.types[1].type.name))         // Pokemon Type 2
// poke.then(poke => console.log('Height: ' + currentPoke.height))               // Pokemon Height              
// poke.then(poke => console.log('Weight: ' + currentPoke.weight))               // Pokemon Weight

// poke.then(poke => console.log(poke.types))
// console.log(currentPoke);
let statValue = []
let statName = []

// console.log(pokeName);
// let pokeStats = new Promise((resolve, reject) => {
//     for (let i = 0; i < 4; i++) {                                       // Loop for each Stat Type (hp/atk/Satk/def/Sdef)
//         poke                                                            // 
//             .then(poke => currentPoke.stats[i].base_stat)               // Get Stat Number
//             .then(poke => statValue = poke)                             // Store Stat Number
//             .then(poke => currentPoke.stats[i].stat.name)               // Get Stat Name
//             .then(poke => statName[i] = poke)                           // Store Stat Name
//             .then(poke => console.log(statValue))
//     };
// })

// pokeStats
//     .then(console.log(statValue))

// poke.then(poke => console.log(poke.types));