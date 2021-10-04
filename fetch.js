let curPoke = []
let curPokeStats = []
let promptTest = prompt('Give us a name').toLowerCase();

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
    if (inch === 12) {
        inch = 0
        foot = foot + 1
    }  
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
// API Fetch, Creates Arrays, Inserts HTML
fetch('https://pokeapi.co/api/v2/pokemon/' + promptTest + '/')
    .then(res => res.json())
    .then(data => {
        curPoke.name = data.name
        curPoke.id = data.id
        curPoke.height = data.height
        curPoke.weight = data.weight
        curPoke.abilities = data.abilities
        curPoke.abilities = data.abilities
        curPoke.typeOne = data.types[0].type.name
        if (data.types.length > 1) {
            curPoke.typeTwo = data.types[1].type.name
        }
        curPoke.sprite = data.sprites.front_default
        curPokeStats.hp = data.stats[0].base_stat
        curPokeStats.atk = data.stats[1].base_stat
        curPokeStats.def = data.stats[2].base_stat
        curPokeStats.satk = data.stats[3].base_stat
        curPokeStats.sdef = data.stats[4].base_stat
        curPokeStats.spd = data.stats[5].base_stat
        curPoke.img = data.sprites.other.dream_world.front_default
        document.querySelector(".container").style.display = "grid";
        imgDiv.innerHTML = '<img src="' + curPoke.img + '" class="image">';
        pokeInfo.insertAdjacentHTML('afterbegin', `<h1 class="pokeName">${data.name}</h1>`)
        pokeInfo.insertAdjacentHTML('beforeend', `<h3 class="pokeID"># ${curPoke.id}</h3>`)
        pokeHW.insertAdjacentHTML('afterbegin', `<h3 class="height">Height: ${heightAdjust(curPoke.height)}</h3>`)
        pokeHW.insertAdjacentHTML('beforeend', `<h3 class="weight">Weight: ${weightAdjust(curPoke.weight)}</h3>`)
        pokeHW.insertAdjacentHTML('beforeend', `<h3 class="ability">Abilities: ${upperCase(curPoke.abilities[0].ability.name)},  ${upperCase(curPoke.abilities[1].ability.name)}</h3>`)
        typeBar.insertAdjacentHTML('afterbegin', `<h3 class=" type ${curPoke.typeOne}">${upperCase(curPoke.typeOne)}</h3>`)
        if (curPoke.typeTwo) {
            typeBar.insertAdjacentHTML('beforeend', `<h3 class="type ${curPoke.typeTwo}">${upperCase(curPoke.typeTwo)}</h3>`);
        }
        document.querySelector(".hp").style.width = `${percentage(curPokeStats.hp)}%`;
        document.querySelector(".atk").style.width = `${percentage(curPokeStats.atk)}%`;
        document.querySelector(".def").style.width = `${percentage(curPokeStats.def)}%`;
        document.querySelector(".spd").style.width = `${percentage(curPokeStats.spd)}%`;
        document.querySelector(".satk").style.width = `${percentage(curPokeStats.satk)}%`;
        document.querySelector(".sdef").style.width = `${percentage(curPokeStats.sdef)}%`;
    })
    .catch(() => alert("That's not a Pokemon! Be sure to check your spelling and try again!"))