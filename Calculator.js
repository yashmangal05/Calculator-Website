const text = document.querySelector('#text');
text.addEventListener('keydown', function (e) {
    if (e.key === '1') {
        one.style.borderRadius = '20%';
        one.style.background = '#abb776';
        setTimeout(function () {
            one.style.borderRadius = '5px';
            one.style.background = 'white';
        }, 200)
    }
    else if (e.key === '2') {
        two.style.borderRadius = '20%';
        two.style.background = '#abb776';
        setTimeout(function () {
            two.style.borderRadius = '5px';
            two.style.background = 'white';
        }, 200)
    }
    else if (e.key === '3') {
        three.style.borderRadius = '20%';
        three.style.background = '#abb776';
        setTimeout(function () {
            three.style.borderRadius = '5px';
            three.style.background = 'white';
        }, 200)
    }
    else if (e.key === '4') {
        four.style.borderRadius = '20%';
        four.style.background = '#abb776';
        setTimeout(function () {
            four.style.borderRadius = '5px';
            four.style.background = 'white';
        }, 200)
    }
    else if (e.key === '5') {
        five.style.borderRadius = '20%';
        five.style.background = '#abb776';
        setTimeout(function () {
            five.style.borderRadius = '5px';
            five.style.background = 'white';
        }, 200)
    }
    else if (e.key === '6') {
        six.style.borderRadius = '20%';
        six.style.background = '#abb776';
        setTimeout(function () {
            six.style.borderRadius = '5px';
            six.style.background = 'white';
        }, 200)
    }

    else if (e.key === '7') {
        seven.style.borderRadius = '20%';
        seven.style.background = '#abb776';
        setTimeout(function () {
            seven.style.borderRadius = '5px';
            seven.style.background = 'white';
        }, 200)
    }
    else if (e.key === '8') {
        eight.style.borderRadius = '20%';
        eight.style.background = '#abb776';
        setTimeout(function () {
            eight.style.borderRadius = '5px';
            eight.style.background = 'white';
        }, 200)
    }
    else if (e.key === '9') {
        nine.style.borderRadius = '20%';
        nine.style.background = '#abb776';
        setTimeout(function () {
            nine.style.borderRadius = '5px';
            nine.style.background = 'white';
        }, 200)
    }
    else if (e.key === '0') {
        zero.style.borderRadius = '20%';
        zero.style.background = '#abb776';
        setTimeout(function () {
            zero.style.borderRadius = '5px';
            zero.style.background = 'white';
        }, 200)
    }
    else if (e.key === '+') {
        add.style.borderRadius = '20%';
        add.style.background = '#abb776';
        setTimeout(function () {
            add.style.borderRadius = '5px';
            add.style.background = 'white';
        }, 200)
    }
    else if (e.key === '-') {
        subtract.style.borderRadius = '20%';
        subtract.style.background = '#abb776';
        setTimeout(function () {
            subtract.style.borderRadius = '5px';
            subtract.style.background = 'white';
        }, 200)
    }
    else if (e.key === '/') {
        divide.style.borderRadius = '20%';
        divide.style.background = '#abb776';
        setTimeout(function () {
            divide.style.borderRadius = '5px';
            divide.style.background = 'white';
        }, 200)
    }
    else if (e.key === '.') {
        decimal.style.borderRadius = '20%';
        decimal.style.background = '#abb776';
        setTimeout(function () {
            decimal.style.borderRadius = '5px';
            decimal.style.background = 'white';
        }, 200)
    }
    else if (e.key === '*') {
        multiply.style.borderRadius = '20%';
        multiply.style.background = '#abb776';
        setTimeout(function () {
            multiply.style.borderRadius = '5px';
            multiply.style.background = 'white';
        }, 200)
    }
    else if (e.key === '=') {
        equal.style.borderRadius = '20%';
        equal.style.background = '#abb776';
        setTimeout(function () {
            equal.style.borderRadius = '5px';
            equal.style.background = 'rgb(15, 165, 15)';
        }, 200)
    }
    // else if (e.key === 'Backspace' || e.key === 'Delete') {
    //     nine.style.borderRadius = '20%';
    //     nine.style.background = '#abb776';
    //     setTimeout(function () {
    //         nine.style.borderRadius = '5px';
    //         nine.style.background = 'white';
    //     }, 200)
    // }
    else { }
})
const zero = document.querySelector('#zero');
zero.addEventListener('click', function () {
    text.value = text.value + 0;
})

const one = document.querySelector('#one');
one.addEventListener('click', function () {
    text.value = text.value + 1;
})

const two = document.querySelector('#two');
two.addEventListener('click', function () {
    text.value = text.value + 2;
})

const three = document.querySelector('#three');
three.addEventListener('click', function () {
    text.value = text.value + 3;
})

const four = document.querySelector('#four');
four.addEventListener('click', function () {
    text.value = text.value + 4;
})

const five = document.querySelector('#five');
five.addEventListener('click', function () {
    text.value = text.value + 5;
})

const six = document.querySelector('#six');
six.addEventListener('click', function () {
    text.value = text.value + 6;
})

const seven = document.querySelector('#seven');
seven.addEventListener('click', function () {
    text.value = text.value + 7;
})

const eight = document.querySelector('#eight');
eight.addEventListener('click', function () {
    text.value = text.value + 8;
})

const nine = document.querySelector('#nine');
nine.addEventListener('click', function () {
    text.value = text.value + 9;
})

const AC = document.querySelector('#AC');
AC.addEventListener('click', function () {
    text.value = '';
})

const divide = document.querySelector('#divide');
divide.addEventListener('click', function () {
    text.value = text.value + '/';
})

const multiply = document.querySelector('#multiply');
multiply.addEventListener('click', function () {
    text.value = text.value + '*';
})

const subtract = document.querySelector('#subtract');
subtract.addEventListener('click', function () {
    text.value = text.value + '-';
})

const add = document.querySelector('#add');
add.addEventListener('click', function () {
    text.value = text.value + '+';
})

const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', function () {
    text.value = text.value + '.';
})

const equal = document.querySelector('#equal');
equal.addEventListener('click', function () {
    text.value = eval(text.value);
})