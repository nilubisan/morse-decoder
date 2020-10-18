const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrOfEncodSymbols = [];
    for(let start = 0, end = 10 ; end <= expr.length; start+=10, end+=10) {
        arrOfEncodSymbols.push(expr.substring(start,end));
    }
    let arrOfDecodSymbols = arrOfEncodSymbols.map(str => {
        if(str[0] == 0) str = str.slice(str.indexOf(1));
        if(str[0] == "*") {
            return " ";
        }
    let strInitLength = str.length;
    for(let i=0; i < strInitLength; i+=2) {
        let code = str[i] + str[i+1];
        str+= (code == "10" ? "." : "-");
    }
    return MORSE_TABLE[str.slice(strInitLength, str.length)];
});
    return arrOfDecodSymbols.join("");
}

module.exports = {
    decode
}