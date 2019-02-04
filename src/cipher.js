const start = document.querySelector(".start");
const cipher = document.querySelector(".cipher");

const about = document.querySelector(".about");
const more = document.querySelector(".more");

start.addEventListener("click", function() {
    cipher.classList.toggle("show")
}, true);

about.addEventListener("click", function() {
    more.classList.toggle("show")
}, true);

function mod(n, m) {
  return ((n % m) + m) % m;
}

function encode(offset, string) {
  let final = ""; 

  for (let i = 0; i < string.length; i++) {
    let letter = string.charCodeAt(i);
    if ((letter >= 65) && (letter <= 90)) {
      encUpper = mod((letter - 65 + offset), 26) + 65;
      final += String.fromCharCode(encUpper);
    } else if ((letter >= 97) && (letter <= 122)) {
      encLower = mod((letter - 97 + offset), 26) + 97;
      final += String.fromCharCode(encLower);
    } else {
      final += String.fromCharCode(letter);
    }
  }
  return final;
}

function decode(offset, string) {
  let final = "";


  for (let i = 0; i < string.length; i++) {
    let letter = string.charCodeAt(i);
    if ((letter >= 65) && (letter <= 90)) {
      encUpper = mod((letter - 65 - offset), 26) + 65;
      final += String.fromCharCode(encUpper);
    } else if ((letter >= 97) && (letter <= 122)) {
      encLower = mod((letter - 97 - offset), 26) + 97;
      final += String.fromCharCode(encLower);
    } else {
      final += String.fromCharCode(letter);
    }
  }
  return final;
}

function getText(textfield, offsetfield, functionToExecute, resultfield) {
  const key = parseInt(document.getElementById(offsetfield).value);
  const text = document.getElementById(textfield);
  const result = functionToExecute(key, text.value);

  text.value = result;
}