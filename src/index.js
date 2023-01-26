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
    let array = expr.split("");
  let size = 10;
  let subarray = [];
  for (let i = 0; i < Math.ceil(array.length / size); i++) {
    subarray[i] = array.slice(i * size, i * size + size);
  }
  let newSubArr = subarray.map(function (el) {
    let newArr = [];
    for (let j = 0; j < el.length; j = j + 2) {
      newArr.push(el[j] + el[j + 1]);
    }
    return newArr;
  });
  let newSubArr1 = newSubArr.map((el) =>
    el.filter((elem) => {
      return elem !== "00" && elem !== "**";
    })
  );
  let morzePraze = newSubArr1
    .map(function (el) {
      let dottetArr = [];
      for (let k = 0; k < el.length; k++) {
        if (el[k] == "10") {
          dottetArr.push(".");
        } else if (el[k] == "11") {
          dottetArr.push("-");
        }
      }
      return dottetArr;
    })
    .map((el) => el.join(""));
  for (let h = 0; h < morzePraze.length; h++) {
    for (const key in MORSE_TABLE) {
      if (key == morzePraze[h]) {
        morzePraze[h] = MORSE_TABLE[key];
      }
    }
  }
  return morzePraze
    .map(function (el) {
      if (el == "") {
        el = " ";
      }
      return el;
    })
    .join("");
}

module.exports = {
    decode
}