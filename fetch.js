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
        document.querySelector(".container").style.display = "grid";
        imgDiv.innerHTML = '<img src="' + data.sprites.other.dream_world.front_default + '" class="image">';
        pokeInfo.insertAdjacentHTML('afterbegin', `<h1 class="pokeName">${data.name}</h1>`)
        pokeInfo.insertAdjacentHTML('beforeend', `<h3 class="pokeID"># ${data.id}</h3>`)
        pokeHW.insertAdjacentHTML('afterbegin', `<h3 class="height">Height: ${heightAdjust(data.height)}</h3>`)
        pokeHW.insertAdjacentHTML('beforeend', `<h3 class="weight">Weight: ${weightAdjust(data.weight)}</h3>`)
        pokeHW.insertAdjacentHTML('beforeend', `<h3 class="ability">Abilities: ${upperCase(data.abilities[0].ability.name)},  ${upperCase(data.abilities[1].ability.name)}</h3>`)
        typeBar.insertAdjacentHTML('afterbegin', `<h3 class=" type ${data.types[0].type.name}">${upperCase(data.types[0].type.name)}</h3>`)
        if (data.types[1]) {
            typeBar.insertAdjacentHTML('beforeend', `<h3 class="type ${data.types[1].type.name}">${upperCase(data.types[1].type.name)}</h3>`);
        }
        setTimeout( function() {
            document.querySelector(".hp").style.width = `${percentage(data.stats[0].base_stat)}%`;
            document.querySelector(".atk").style.width = `${percentage(data.stats[1].base_stat)}%`;
            document.querySelector(".def").style.width = `${percentage(data.stats[2].base_stat)}%`;
            document.querySelector(".spd").style.width = `${percentage(data.stats[3].base_stat)}%`;
            document.querySelector(".satk").style.width = `${percentage(data.stats[4].base_stat)}%`;
            document.querySelector(".sdef").style.width = `${percentage(data.stats[5].base_stat)}%`;
        }, 500);
        
    })
    .catch(() => alert("That's not a Pokemon! Be sure to check your spelling and try again!"))