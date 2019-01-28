function encode(offset, string) {
  let final = "";

  for (let i = 0; i < string.length; i++) {
    let letter = string.charCodeAt(i);
    if ((letter >= 32) && (letter <= 254)) {
      encLetter = ((letter - 32 + offset) % 222) + 32;
      final += String.fromCharCode(encLetter);
    }
  }
  return final;
}

function decode(offset, string) {
  let final = "";

  for (let i = 0; i < string.length; i++) {
    let letter = string.charCodeAt(i);
    if ((letter >= 32) && (letter <= 254)) {
      encLetter = ((letter - 32 - offset) % 222) + 32;
      final += String.fromCharCode(encLetter);
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