let curPoke = []
let promptTest = prompt('Give us a name');
// const nameThat = document.getElementById('name');

let poke = new Promise((resolve, reject) => {
    resolve(
        fetch('https://pokeapi.co/api/v2/pokemon/' + promptTest + '/')
            .then(res => res.json())
    )    
})

// API Data to pokeName Array
poke.then(data => curPoke.name = data.name)                          
poke.then(data => curPoke.id = data.id)
poke.then(data => curPoke.height = data.height)
poke.then(data => curPoke.weight = data.weight) 
poke.then(data => curPoke.typeOne = data.types[0].type.name)
poke.then(data => curPoke.typeTwo = data.types[1].type.name)
poke.then(data => curPoke.sprite = data.sprites.front_default)

// Effectiveness Data to Array
setTimeout(() => {
    let pokeDmg = new Promise((resolve, reject) => {
        resolve(
            fetch('https://pokeapi.co/api/v2/type/' + curPoke.id + '/')
                .then(res => res.json())
        )       
    })
    let pokeImg = new Promise((resolve, reject) => {
        resolve(
            fetch('https://pokeres.bastionbot.org/images/pokemon/' + curPoke.id + '.png')
        )
    })

    pokeDmg.then(data => curPoke.dmg = data.damage_relations)           // Damage Effectiveness
    pokeImg.then(data => curPoke.img = data.url)                                    // Large Img

}, 1000);

const testing = document.getElementById('testing');
let li = document.createElement('li');


setTimeout(() => {
        // li.innerHTML = curPoke.name;
        // testing.append(li);
        console.log(curPoke);
        // console.log(curPoke.img)
        // console.log(curPoke.dmg)
    }, 2000);
