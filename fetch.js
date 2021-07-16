// let pokemon = [
//     1
// ]

// fetch('https://pokeapi.co/api/v2/type/'+pokemon[0]+'/')
//     .then(res => res.json())
//     .then(data => console.log(data))
let pokeName = []
let promptTest = prompt('Give us a name');

let poke = new Promise((resolve, reject) => {
    resolve(
        fetch('https://pokeapi.co/api/v2/pokemon/' + promptTest + '/')
            .then(res => res.json())
    )    
})

setTimeout(() => {
    poke.then(data => pokeName.name = data.name)
    poke.then(data => pokeName.id = data.id)
    poke.then(data => pokeName.height = data.height)
    poke.then(data => pokeName.weight = data.weight)
    poke.then(data => pokeName.typeOne = data.types[0].type.name)
    poke.then(data => pokeName.typeTwo = data.types[1].type.name)
}, 1000);

setTimeout(() => {
    let poke2 = new Promise((resolve, reject) => {
        resolve(
            fetch('https://pokeapi.co/api/v2/type/' + pokeName.id + '/')
                .then(res => res.json())
        )       
    })
    poke2.then(data => pokeName.effective = data.damage_relations)

}, 2000);

// let nameTest = poke.then(theName => pokeName.name = theName.name)
// let heightTest = poke.then(theHeight => pokeName.height = theHeight.height)    
// poke.then(data => pokeName.name = data.name)
// poke.then(data => pokeName.id = data.id)
// poke.then(data => pokeName.height = data.height)
// poke.then(data => pokeName.weight = data.weight)
// poke.then(data => pokeName.typeOne = data.types[0].type.name)
// poke.then(data => pokeName.typeTwo = data.types[1].type.name)
// poke2.then(data => pokeName.effective = data.damage_relations)

const testing = document.getElementById('testing');
let li = document.createElement('li');


setTimeout(() => {
        // li.innerHTML = pokeName.name;
        // testing.append(li);
        console.log(pokeName)
        // console.log(pokeName.effective.double_damage_from[0].name);

    }, 5000);

