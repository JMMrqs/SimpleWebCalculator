const screen = document.querySelector('#screen');
const digits = document.querySelectorAll('.digit');
let baseNumber = '';
let buffNumber = '';
let operation = '';
const operator = {
    add: 'add',
    subtract: 'subtract',
    multiply: 'multiply',
    divide: 'divide'
}
digits.forEach(digitInput => {
    digitInput.addEventListener("click", ()=> {
        buffNumber += digitInput.value;
        screen.innerHTML = buffNumber;
    })
});

document.getElementById('add').addEventListener('click', ()=> {
    if (baseNumber == 0) {
        baseNumber = buffNumber.slice();
    }
    buffNumber = '';
    operation = operator.add;
    screen.innerHTML = baseNumber;
});
document.getElementById('subtract').addEventListener('click', ()=> {
    if (baseNumber == 0) {
        baseNumber = buffNumber.slice();
    }
    buffNumber = '';
    operation = operator.subtract;
    screen.innerHTML = baseNumber;
});
document.getElementById('multiply').addEventListener('click', ()=> {
    if (baseNumber == 0) {
        baseNumber = buffNumber.slice();
    }
    buffNumber = '';
    operation = operator.multiply;
    screen.innerHTML = baseNumber;
});
document.getElementById('divide').addEventListener('click', ()=> {
    if (baseNumber == 0) {
        baseNumber = buffNumber.slice();
    }
    buffNumber = '';
    operation = operator.divide;
    screen.innerHTML = baseNumber;
});

document.getElementById('equal').addEventListener('click', ()=> {
    let base = Number(baseNumber);
    let buff = Number(buffNumber);
    let orderCount = 0;
    while (base % 1 != 0 && buff % 1 != 0) {
        base *= 10;
        buff *= 10;
        orderCount++;
    }
    switch (operation) {
        case operator.add: baseNumber = base + buff;
            break;
        case operator.subtract: baseNumber = base - buff;
            break;
        case operator.multiply: baseNumber = base * buff;
            break;
        case operator.divide: baseNumber = base / buff;
            break;
    }
    if (orderCount != 0) {
        baseNumber /= (10 * orderCount);
    }
    buffNumber = '';
    screen.innerHTML = baseNumber;
});

document.getElementById('clear').addEventListener('click', ()=> {
    baseNumber = ''
    buffNumber = '';
    operation = null;
    screen.innerHTML = buffNumber;
});

document.getElementById('erase').addEventListener('click', ()=> {
    if (buffNumber == 0) {
        baseNumber = ''
        buffNumber = '';
        operation = null;
        screen.innerHTML = buffNumber;
        return;
    }
    buffNumber = buffNumber.slice(0, -1);
    screen.innerHTML = buffNumber;
});