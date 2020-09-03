import Pokemon from "./pokemon.js";
import { random, generateLog, $log, player1Kick, player2Kick } from "./utils.js"
import { buttonClick } from "./buttons.js"
import { pokemons } from './pokemons.js';

const pickachu = pokemons.find(item => item.name === 'Pickachu');

const player1 = new Pokemon({
    ...pickachu,
    selectors: 'player1',
})

const player2 = new Pokemon({
    name: 'Charmander',
    type: 'fire',
    hp: 450,
    selectors: 'player2',
});
const $control = document.querySelector('.control');

player1.attacks.forEach(item => {
    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $btn.innerText = item.name;
    const clickButton = buttonClick (item.maxCount, $btn);
    $btn.addEventListener('click', () => {
        console.log('Click button ', $btn.innerText);
        clickButton();
        player1.changeHP(random(60, 20), function (count) {
            console.log('Some change after change HP', count);
            console.log(generateLog(player1, player2, count));
        });
        player2.changeHP(random(60, 20));

    })

    // player1Kick(player1, player2, count);

    $control.appendChild($btn);
})


