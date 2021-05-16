const $control = document.querySelector('.control');

function create (text) {
    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $btn.innerText = text;
    $control.appendChild($btn);
    
    return $btn;
}

function click (max, $btn) {
    const innerText = $btn.innerText;
    $btn.innerText = `${innerText} ${max}`;
    return function() {
        max--;
        $btn.innerText = `${innerText} ${max}`;
        if (max === 0) {
            $btn.disabled = true;
        }
    }
}

function disableAll () {
    const buttonAll = document.querySelectorAll('.control .button');

    buttonAll.forEach($btn => {
        $btn.disabled = true;
    });
}

function deleteAll () {
    const buttonAll = document.querySelectorAll('.control .button');

    buttonAll.forEach($btn => {
        $btn.remove();
    });
}

export { create, click, disableAll, deleteAll };