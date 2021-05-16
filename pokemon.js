import { random } from './utils.js';

class Selectors {
    constructor(name) {
        this.$elHp = document.getElementById(`health-${name}`);
        this.$elProgressbar = document.getElementById(`progressbar-${name}`);
        this.$img = document.getElementById(`img-${name}`);
        this.$name = document.getElementById(`name-${name}`);
        this.selector = name;
    }
}

class Pokemon extends Selectors {
    constructor({ name, hp, type, selectors, img, attacks = [] }) {
        super(selectors); 
        this.name = name;
        this.hp = {
            current: hp,
            total: hp,
        };
        this.type = type,
        this.attacks = attacks;
        this.img = img;
        this.renderHP();
        this.renderImgName();
    }

    renderHP = () => {
        const { hp: { total, current }, $elHp, $elProgressbar } = this;

        $elHp.innerText = current + ' / ' + total;
        const percent = current * 100 / total;
        $elProgressbar.style.width = percent + '%';
        if ((percent <= 60)&&(percent > 20)) {
            $elProgressbar.classList.add('low');
        } else if (percent <= 20) {
            $elProgressbar.classList.add('critical');
        } else {
            $elProgressbar.classList.remove('low','critical');
        }

    }

    renderImgName = () => {
        const { $img, $name } = this;

        $img.setAttribute("src", this.img);
        $name.innerText = this.name;
    }

    changeHP = (count, cb) => {
        this.hp.current -= count;
    
        if (this.hp.current <= 0) {
            this.hp.current = 0;
        }
    
        this.renderHP();
        cb && cb(count);
    }
}

function getPokemon(selector, pokemons) {
    const pokemon = pokemons.splice(random(0, pokemons.length), 1)[0];

    return new Pokemon({
        ...pokemon,
        selectors: selector,
    });
}

export { getPokemon };