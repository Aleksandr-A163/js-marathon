import Pokemon from "./pokemon.js";
import random from "./utils.js"

const player1 = new Pokemon({
    name: 'Pikachu',
    type: 'electric',
    hp: 500,
    selectors: 'character',
})

console.log(player1);


function $getElById(id) {
    return document.getElementById(id);
}



const $btn = $getElById('btn-kick');
const $damage_details1 = $getElById('damage_details1');
const $btn_enemy = $getElById('btn-kick-enemy');


const enemy = {
    name:'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: $getElById('health-enemy'),
    elProgressbar: $getElById('progressbar-enemy'),
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
    renderHP: renderHP,
    changeHP: changeHP
}


const bash = buttonClick(7, $btn);
const second = buttonClick(5, $btn_enemy);


$btn.addEventListener('click', () => {
    bash();
    character.changeHP(random(60, 20));
    enemy.changeHP(random(60, 20));
});


$btn_enemy.addEventListener('click', function () {
    enemy.changeHP(random(35));
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

function init() {
    alert('Start Game!');
    character.renderHP();
    enemy.renderHP();
}



function changeHP(count) {
    this.damageHP -= count;

    const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
    console.log(log);
        const $p = document.createElement('p');
        const $logs = document.querySelector('#logs');
    
        $p.innerText = `${log}`;
    
        $logs.insertBefore($p, $logs.children[0]);
    
    if (this.damageHP <= 0) {
        this.damageHP = 0;
        $p.innerText = 'Бедный ' + this.name + ' проиграл!';
        $btn.disabled = true;
        $btn_enemy.disabled = true;

    }

    this.renderHP();
}


function params() {
    const {defaultHP, damageHP} = character;
    return `[${damageHP}/${defaultHP}]`;
}

function generateLog(firstPerson, secondPerson, count) {

    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. ${count} урона ${params()}`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. ${count} урона ${params()}`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. ${count} урона ${params()}`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. ${count} урона ${params()}`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. ${count} урона ${params()}`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. ${count} урона ${params()}`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. ${count} урона ${params()}`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника. ${count} урона ${params()}`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. ${count} урона ${params()}`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. ${count} урона ${params()}`
    ];

    return logs [random(logs.length) -1];
}

init();