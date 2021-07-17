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
poke.then(data => curPoke.height = data.height)                     // Needs conversion Tool
poke.then(data => curPoke.weight = data.weight)
poke.then(data => curPoke.abilities = data.abilities)
poke.then(data => curPoke.abilities = data.abilities)
poke.then(data => curPoke.typeOne = data.types[0].type.name)
poke.then(data => curPoke.typeTwo = data.types[1].type.name)
poke.then(data => curPoke.sprite = data.sprites.front_default)

// Effectiveness Data to Array
setTimeout(() => {
    let pokeDmg = new Promise((resolve, reject) => {
        resolve(
            fetch('https://pokeapi.co/api/v2/type/' + promptTest + '/')
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

const imgDiv = document.querySelector('.imgDiv');
const pokeInfo = document.querySelector('.pokeInfo');
const pokeHW = document.querySelector('.pokeHW');
const typeBar = document.querySelector('.typeBar');

// Capitalize First Letter
function upperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// Turn Integer into Feet / Inches
function heightAdjust(num) {
    num = num * 0.10;
    num = num * 3.281;
    foot = num.toString();
    foot = foot.substring(0,1)
    inch = num.toString();
    inch = inch.slice(1);
    inch = 12 * inch;
    inch = Math.ceil(inch);
    return `${foot}'${inch}" `
  };
// Turns Integer into Pounds / Ounces
function weightAdjust(num) {
    num = num * 0.1;
    num = num * 2.205;
    num = Number.parseFloat(num).toPrecision(3);
    return `${num} lbs`
}

setTimeout(() => {
        imgDiv.innerHTML = '<img src="' + curPoke.img + '" class="image">';
        pokeInfo.insertAdjacentHTML('afterbegin', `<h1 class="pokeName">${curPoke.name}</h1>`)
        pokeInfo.insertAdjacentHTML('beforeend', `<h3 class="pokeID"># ${curPoke.id}</h3>`)
        pokeHW.insertAdjacentHTML('afterbegin', `<h3 class="height">Height: ${heightAdjust(curPoke.height)}</h3>`)
        pokeHW.insertAdjacentHTML('beforeend', `<h3 class="weight">Weight: ${weightAdjust(curPoke.weight)}</h3>`)
        pokeHW.insertAdjacentHTML('beforeend', `<h3 class="gender">Abilities: ${upperCase(curPoke.abilities[0].ability.name)},  ${upperCase(curPoke.abilities[1].ability.name)}</h3>`)
        typeBar.insertAdjacentHTML('afterbegin', `<h3 class=" type ${curPoke.typeOne}">${upperCase(curPoke.typeOne)}</h3>`)
        typeBar.insertAdjacentHTML('beforeend', `<h3 class="type ${curPoke.typeTwo}">${upperCase(curPoke.typeTwo)}</h3>`)
        console.log(poke);
    }, 2000);
