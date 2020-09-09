import { random } from './utils.js'

function hit(player1, player2, count) {
    const { name, $elHp } = player1;
    const { name: nameEnemy } = player2;
    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${nameEnemy}, не помня себя от испуга, ударил в предплечье врага.`,
        `${name} поперхнулся, и за это ${nameEnemy} с испугу приложил прямой удар коленом в лоб врага. `,
        `${name} забылся, но в это время наглый ${nameEnemy}, приняв волевое решение, неслышно подойдя сзади, ударил. `,
        `${name} пришел в себя, но неожиданно ${nameEnemy} случайно нанес мощнейший удар. `,
        `${name} поперхнулся, но в это время ${nameEnemy} нехотя раздробил кулаком \<вырезанно цензурой\> противника. `,
        `${name} удивился, а ${nameEnemy} пошатнувшись влепил подлый удар. `,
        `${name} высморкался, но неожиданно ${nameEnemy} провел дробящий удар. `,
        `${name} пошатнулся, и внезапно наглый ${nameEnemy} беспричинно ударил в ногу противника `,
        `${name} расстроился, как вдруг, неожиданно ${nameEnemy} случайно влепил стопой в живот соперника. `,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${nameEnemy} со скуки, разбил бровь сопернику. `
    ];

    createP(`${logs[random(0, logs.length)]} -${count} [${$elHp.innerText}]`);
}

function losing(player) {
    if (player.selector === 'player1') {
        createP(`Ваш ${player.name} проиграл!`);
    } else {
        createP(`Противник ${player.name} проиграл!`);
    }
}

function newEnemy(player) {
    createP(`Новый противник - ${player.name}`);
}

function draw() {
    createP(`Ничья!`);
}

function clear() {
    const log = document.querySelectorAll('#logs p');
    log.forEach($log => {
        $log.remove();
    });
}

function endGame(killStrike) {
    createP(`Игра окончена! Побеждено вражеских покемонов: ${killStrike}`);
}

function createP(text) {
    const $p = document.createElement('p');
    $p.innerText = text;

    const $logs = document.querySelector('#logs');
    $logs.insertBefore($p, $logs.children[0]);
}

export { hit, losing, draw, clear, endGame, newEnemy };