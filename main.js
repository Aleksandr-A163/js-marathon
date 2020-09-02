import Pokemon from "./pokemon.js";
import random from "./utils.js"

const player1 = new Pokemon({
    name: 'Pikachu',
    type: 'electric',
    hp: 500,
    selectors: 'character',
})

const player2 = new Pokemon({
    name: 'Charmander',
    type: 'fire',
    hp: 450,
    selectors: 'enemy',
})


function $getElById(id) {
    return document.getElementById(id);
}

const $btn = $getElById('btn-kick');
const $btn_enemy = $getElById('btn-kick-enemy');


const bash = buttonClick(7, $btn);
const second = buttonClick(5, $btn_enemy);


$btn.addEventListener('click', () => {
    bash();
    player1.changeHP(random(60, 20), function (count) {
        console.log('Some change after change HP', count);
        console.log(generateLog(player1, player2, count));
    });
    player2.changeHP(random(60, 20));
});


$btn_enemy.addEventListener('click', function () {
    player1.changeHP(random(60, 20));
    player2.changeHP(random(35));
    second();
});

function buttonClick(count = 7, button) {
    const innerHTML = button.innerHTML;
    button.innerText = `${innerHTML} (${count})`;
    return function (){
        count--;
        if (count === 0) {
            button.disabled = true;
        }
        button.innerHTML = `${innerHTML} (${count});`
    }
}


function generateLog(player1, player2, count) {
    const { name, hp: { current, total } } = player1;
    const { name: enemyName } = player2;

    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${enemyName}, не помня себя от испуга, ударил в предплечье врага. ${count} урона [${current}/${total}]`,
        `${name} забылся, но в это время наглый ${enemyName}, приняв волевое решение, неслышно подойдя сзади, ударил. ${count} урона [${current}/${total}]`,
        `${name} пришел в себя, но неожиданно ${enemyName} случайно нанес мощнейший удар. ${count} урона [${current}/${total}]`,
        `${name} поперхнулся, и за это ${enemyName} с испугу приложил прямой удар коленом в лоб врага. ${count} урона [${current}/${total}]`,
        `${name} поперхнулся, но в это время ${enemyName} нехотя раздробил кулаком \<вырезанно цензурой\> противника. ${count} урона [${current}/${total}]`,
        `${name} удивился, а ${enemyName} пошатнувшись влепил подлый удар. ${count} урона [${current}/${total}]`,
        `${name} высморкался, но неожиданно ${enemyName} провел дробящий удар. ${count} урона [${current}/${total}]`,
        `${name} пошатнулся, и внезапно наглый ${enemyName} беспричинно ударил в ногу противника. ${count} урона [${current}/${total}]`,
        `${name} расстроился, как вдруг, неожиданно ${enemyName} случайно влепил стопой в живот соперника. ${count} урона [${current}/${total}]`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${enemyName} со скуки, разбил бровь сопернику. ${count} урона [${current}/${total}]`
    ];

    return logs [random(logs.length) -1];
}
