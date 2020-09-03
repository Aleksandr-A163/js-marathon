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

export {
    buttonClick, 
};