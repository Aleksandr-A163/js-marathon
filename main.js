const $btn = document.getElementById('btn-kick');
const $btn_enemy = document.getElementById('btn-kick-enemy');

const character = {
    name:'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
    renderHP: renderHP,
    changeHP: changeHP
}

const enemy = {
    name:'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
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
    console.log('Start Game!');
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
    if (this.damageHP < count) {
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл!');
        $btn.disabled = true;
        $btn_enemy.disabled = true;
    } else {
        this.damageHP -= count;
    }

    this.renderHP();
}

function random(num) {
    return Math.ceil(Math.random() * num);
}
init();