function $getElById(id) {
    return document.getElementById(id);
}



const $btn = $getElById('btn-kick');
const $btn_enemy = $getElById('btn-kick-enemy');

const character = {
    name:'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: $getElById('health-character'),
    elProgressbar: $getElById('progressbar-character'),
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
    renderHP: renderHP,
    changeHP: changeHP
}

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

function buttonClick(){
    let push = 0;

    return function (){
       return push++;

    }
}


const bash = buttonClick();



$btn.addEventListener('click', () => {
    character.changeHP(random(20));
    enemy.changeHP(random(20));
    bash();
    $getElById('btn-kick').innerHTML = `Обоюдный удар был нанесен ${$btn.bash}`
});

const second = buttonClick();


$btn_enemy.addEventListener('click', function () {
    enemy.changeHP(random(35));
    second();

    $getElById('btn-kick-enemy').innerHTML = second();
});


function init() {
    alert('Start Game!');
    character.renderHP();
    enemy.renderHP();
}

function renderHP() {
    this.renderHPLife();
    this.renderProgressbarHP();
}

function renderHPLife() {
    console.log(this.elHP.innerText);
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP() {
    this.elProgressbar.style.width = this.damageHP + '%';
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

function random(num) {
    return Math.ceil(Math.random() * num);
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
