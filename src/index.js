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
    let arr = expr.split('**********');
    let all = [];
    for(let i = 0; i < arr.length; i++) {
     
     let numSymb = arr[i].length / 10;
     let leng = arr[i].length;
     let comon = [];
     let str = '';
   
         
         for(let j = 0, m = 0; m < numSymb; m++) {
             str = '';
 
             for (; ;) {
 
              if(arr[i][leng - 1 - (j + 1)] + arr[i][leng - 1 - j] === '11') {
                     str = str + '-';
                 }
             if(arr[i][leng - 1 - (j + 1)] + arr[i][leng - 1 - j] === '10') {
                     str = str + '.';
 
                 }
             if(arr[i][leng - 1 - (j + 1)] + arr[i][leng - 1 - j] === '00') {
                 }
                 j = j + 2;
             if (j % 10 === 0) break;
             }
             comon.push(str.split('').reverse().join(''));
         };
 
         let neo = comon.reverse();
 
 
         let res = [];
       
         
         let mors = '';
         for(let i = 0; i < neo.length; i++) {
             mors = mors + MORSE_TABLE[neo[i]];
         }
   
         all.push(mors);
    }
 
    return all.join(' ');
 };


module.exports = {
    decode
}