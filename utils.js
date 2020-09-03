function random(max, min = 0) {
    const num = max - min;
    return Math.ceil(Math.random() * num) + min;
}

function player1Kick(player1, player2, count) {
    let log = generateLog(player1, player2, count);
    $log(log);
}

function player2Kick(player1, player2, count) {
    let log = generateLog(player1, player2, count);
    $log(log);
}

function $log(log) {
    const $logs = document.querySelector('#logs');
    const $p = document.createElement('p');
    $p.innerText = log;
    $logs.insertBefore($p, $logs.children[0]);
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

export {
    random, 
    generateLog,
    $log,
    player1Kick,
    player2Kick
};