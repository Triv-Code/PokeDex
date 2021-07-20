let curPoke = []
let curPokeStats = []
let promptTest = prompt('Give us a name');
// let promptTest = 1;
// const searchPoke = document.querySelector('.search').value;

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
poke.then(data => curPokeStats.hp = data.stats[0].base_stat);
poke.then(data => curPokeStats.atk = data.stats[1].base_stat);
poke.then(data => curPokeStats.def = data.stats[2].base_stat);
poke.then(data => curPokeStats.satk = data.stats[3].base_stat);
poke.then(data => curPokeStats.sdef = data.stats[4].base_stat);
poke.then(data => curPokeStats.spd = data.stats[5].base_stat);
// Checks for typeTwo (avoids bug if there is only one type)
function multiType() {
    if (!curPoke.typeTwo) {
        console.log('This Pokemon only has one type. (Line 21 Error)');
    } else {
        typeBar.insertAdjacentHTML('beforeend', `<h3 class="type ${curPoke.typeTwo}">${upperCase(curPoke.typeTwo)}</h3>`);
    }

}

// Large Image Fetch... Delayed for curPoke.id to update. 
setTimeout(() => {
    let pokeImg = new Promise((resolve, reject) => {
        resolve(
            fetch('https://pokeres.bastionbot.org/images/pokemon/' + curPoke.id + '.png')
        )
    })
    pokeImg.then(data => curPoke.img = data.url)

}, 1000);

const imgDiv = document.querySelector('.imgDiv');
const pokeInfo = document.querySelector('.pokeInfo');
const pokeHW = document.querySelector('.pokeHW');
const typeBar = document.querySelector('.typeBar');
const pokeData = document.querySelector('.pokeData');

// Capitalize First Letter
function upperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// Turn Integer into Feet / Inches
function heightAdjust(num) {        //--- Needs Adjusted for Tall Pokemon
    num = num * 0.10;
    num = num * 39.37;
    num = num / 12;
    foot = num.toString();
    foot = Math.floor(num);
    inch = num - foot;
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
// Finds Percentage for Stats Bar
function percentage(num) {
    num = num / 160;
    num = num * 100
    num = Math.floor(num);
    return num
}

setTimeout(() => {
        document.querySelector(".container").style.display= "grid";
        imgDiv.innerHTML = '<img src="' + curPoke.img + '" class="image">';
        pokeInfo.insertAdjacentHTML('afterbegin', `<h1 class="pokeName">${curPoke.name}</h1>`)
        pokeInfo.insertAdjacentHTML('beforeend', `<h3 class="pokeID"># ${curPoke.id}</h3>`)
        pokeHW.insertAdjacentHTML('afterbegin', `<h3 class="height">Height: ${heightAdjust(curPoke.height)}</h3>`)
        pokeHW.insertAdjacentHTML('beforeend', `<h3 class="weight">Weight: ${weightAdjust(curPoke.weight)}</h3>`)
        pokeHW.insertAdjacentHTML('beforeend', `<h3 class="ability">Abilities: ${upperCase(curPoke.abilities[0].ability.name)},  ${upperCase(curPoke.abilities[1].ability.name)}</h3>`)
        typeBar.insertAdjacentHTML('afterbegin', `<h3 class=" type ${curPoke.typeOne}">${upperCase(curPoke.typeOne)}</h3>`)
        // typeBar.insertAdjacentHTML('beforeend', `<h3 class="type ${curPoke.typeTwo}">${upperCase(curPoke.typeTwo)}</h3>`)
        multiType();
        document.querySelector(".hp").style.width=`${percentage(curPokeStats.hp)}%`;
        document.querySelector(".atk").style.width=`${percentage(curPokeStats.atk)}%`;
        document.querySelector(".def").style.width=`${percentage(curPokeStats.def)}%`;
        document.querySelector(".spd").style.width=`${percentage(curPokeStats.spd)}%`;
        document.querySelector(".satk").style.width=`${percentage(curPokeStats.satk)}%`;
        document.querySelector(".sdef").style.width=`${percentage(curPokeStats.sdef)}%`;

        console.log(curPoke.height);
    }, 1500);
