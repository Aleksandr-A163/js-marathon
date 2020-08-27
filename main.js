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



$btn.addEventListener('click', function () {
    console.log('Kick');
    console.log(random(20)); 
    character.changeHP(random(20));
    enemy.changeHP(random(20));

});

$btn_enemy.addEventListener('click', function () {
    console.log('Kick enemy');
    console.log(random(35)); 
    enemy.changeHP(random(35));

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

    const log = this === enemy ? generateLog(this, character) : generateLog(this, enemy);
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
    return `${damageHP}/${defaultHP}`;
}

function generateLog(count) {
    const { name } = character;
    const { name: nameEnemy } = enemy;

    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${nameEnemy}, не помня себя от испуга, ударил в предплечье врага. $count ${params()}`,
        `${name} забылся, но в это время наглый ${nameEnemy}, приняв волевое решение, неслышно подойдя сзади, ударил. ${count} ${params()}`,
        `${name} пришел в себя, но неожиданно ${nameEnemy} случайно нанес мощнейший удар. ${count} ${params()}`,
        `${name} поперхнулся, и за это ${nameEnemy} с испугу приложил прямой удар коленом в лоб врага. ${count} ${params()}`,
        `${name} поперхнулся, но в это время ${nameEnemy} нехотя раздробил кулаком \<вырезанно цензурой\> противника. ${count} ${params()}`,
        `${name} удивился, а ${nameEnemy} пошатнувшись влепил подлый удар. ${count} ${params()}`,
        `${name} высморкался, но неожиданно ${nameEnemy} провел дробящий удар. ${count} ${params()}`,
        `${name} пошатнулся, и внезапно наглый ${nameEnemy} беспричинно ударил в ногу противника. ${count} ${params()}`,
        `${name} расстроился, как вдруг, неожиданно ${nameEnemy} случайно влепил стопой в живот соперника. ${count} ${params()}`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${nameEnemy} со скуки, разбил бровь сопернику. ${count} ${params()}`
    ];

    return logs [random(logs.length) -1];
}

init();