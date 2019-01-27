function encode(offset, string) {
  let final = "";

  for (let i = 0; i < string.length; i++) {
    let letter = string.charCodeAt(i);
    if ((letter >= 65) && (letter <= 90)) {
      encUpper = (letter - 65 + offset) % 26 + 65;
      final += String.fromCharCode(encUpper);
    } else if ((letter >= 97) && (letter <= 122)) {
      encLower = (letter - 97 + offset) % 26 + 97;
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
      encUpper = ((letter - 65 - offset) % 26) + 65;
      final += String.fromCharCode(encUpper);
    } else if ((letter >= 97) && (letter <= 122)) {
      encLower = ((letter - 97 - offset) % 26) + 97;
      final += String.fromCharCode(encLower);
    } else {
      final += String.fromCharCode(letter);
    }
  }
  return final;
}

function getTextEncode() {
  const key = parseInt(document.getElementById("offsetEncode").value);
  const text = document.getElementById("textToEncode").value;

  const result = encode(key, text);

  document.getElementById("encoded").innerHTML = "<b>A sua mensagem criptografada é</b>:<br> " + result;
}

function getTextDecode() {
  const keyDec = parseInt(document.getElementById("offsetDecode").value);
  const textDec = document.getElementById("textToDecode").value;

  const result = decode(keyDec, textDec);

  document.getElementById("decoded").innerHTML = "<b>A sua mensagem decifrada é</b>:<br> " + result;
}