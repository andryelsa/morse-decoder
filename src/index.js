const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};




function decode(expr) {
    let arr = [];
    let res = [];
    let finish = [];
    let result = '';

    let exprArr = [...expr];
    for (i = 0; i < expr.length; i += 10) {
        let rem = exprArr.splice(0, 10)
        if (rem[0] != '*') {
            arr.push(rem);
        } else arr.push([' ']);
    }

    arr.map((value, index) => {
        let arr2 = [];
        for (i = 0; i <= 9; i += 2) {
            let rem = value.splice(0, 2).join('');
            if (rem == '10') rem = '.';
            if (rem == '11') rem = '-';
            (rem != '00') ? arr2.push(rem) : rem;
        }

        value.length = 0;
        res.push(value.concat(arr2).join(''));
        arr2.length = 0;
    })
    res.forEach((value) => {
        if (value == ' ') { finish.push(' '); } else {
            let c = MORSE_TABLE[value];
            finish.push(c);
        }
    })
    result = finish.join('');
    console.log('Result: ', result);




    return result



}


module.exports = {
    decode
}