import * as log from './log.js';
import { getPokemon } from './pokemon.js';
import { pokemons } from './pokemons.js';
import * as button from './button.js';
import { random } from './utils.js';

class Game {
    constructor () {
        this.player1;
        this.player2;
        this.killStrike;
        this.availablePlayers;
        this.startGame();
    };

    async fetchPokemon(id = 0) {
        const requestString = id ? `https://reactmarathon-api.netlify.app/api/pokemons?id=${id}` : 'https://reactmarathon-api.netlify.app/api/pokemons?random=true';
        console.log(requestString);

        const response = await fetch(requestString);
        const answer = response.ok ? await response.json() : false;

        if (!answer["id"]) return this.fetchPokemon();
        return answer;
    }

    async fetchDamage(attackerID, defenderID, attackID = 0) {
        const requestString = `https://reactmarathon-api.netlify.app/api/fight?player1id=${attackerID}&attackId=${attackID}&player2id=${defenderID}`;

        const response = await fetch(requestString);
        const answer = response.ok ? await response.json() : false;

        if (!answer["kick"]) return false;
        return answer;
    }

    startGame = async () => {
        button.deleteAll();

        this.availablePlayers = pokemons.slice();
        this.player1 = getPokemon('player1', this.availablePlayers);
        this.player2 = getPokemon('player2', this.availablePlayers);
        this.killStrike = 0;

        this.player1.attacks.forEach(attack => {
            const $btn = button.create(`${attack.name}`);
            const clickCount = button.click(attack.maxCount, $btn);
        
            $btn.addEventListener('click', () => {
                clickCount();
                this.hit(this.player2, this.player1, attack);
                this.hit(this.player1, this.player2, this.player2.attacks[0]);
                this.checkLosing();
            });
        });
    }

    restartGame = () => {
        button.deleteAll();
        log.endGame(this.killStrike);

        const $btn = button.create('New Game');
    
        $btn.addEventListener('click', () => {
            log.clear();
            this.startGame();
        });
    }

    checkLosing = () => {
        const { player1, player2 } = this;
        
        if (player1.hp.current === 0 && player2.hp.current === 0) {
            log.draw();
            this.restartGame();
            return;
        }
        if (player1.hp.current === 0) {
            log.losing(player1);
            this.restartGame();
        }
        if (player2.hp.current === 0) {
            log.losing(player2);
            this.player2 = getPokemon('player2', this.availablePlayers);
            log.newEnemy(this.player2);
            this.killStrike++;
        }
    }

    hit = (player1, player2, attack) => {
        player1.changeHP(random(attack.minDamage, attack.maxDamage), function(count) {
            log.hit(player1, player2, count);
        });
    }
};

export default Game;