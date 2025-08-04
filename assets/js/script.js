let input = document.getElementById('display');

function display(value) {
    input.value += value;
}

function clearAll() {
    input.value = "";
}

function equle(){
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'error';
    }
}

function clearOne() {
    input.value = input.value.slice(0,-1);
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '(', ')', '.'];

    if (keys.includes(key)) {
        display(key);
    } else if (key === 'Enter') {
        event.preventDefault();
        equle();
    } else if (key === 'Esc') {
        clearAll();
    } else if (key === 'Backspace') {
        clearOne();
    }
})


