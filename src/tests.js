let resultadoEncode = encode(7, "JÉSSICA NÃO CURTE ABACATE KKK");

if (resultadoEncode === "QÉZZPJH UÃV JBYAL HIHJHAL RRR") {
    console.log("A função de criptografar funcionou! O resultado " + resultadoEncode + " é o esperado.");
} else {
    console.log("Tente novamente, a função de criptografar flopou. O resultado " + resultadoEncode + " não é o esperado ('QÉZZPJH UÃV JBYAL HIHJHAL RRR').");
}

resultadoEncode = encode(-175, "teô, ztexkt wx vhpuhr!1! ddd");

if (resultadoEncode === "alô, galera de cowboy!1! kkk") {
    console.log("A função de criptografar funcionou! O resultado " + resultadoEncode + " é o esperado.");
} else {
    console.log("Tente novamente, a função de criptografar flopou. O resultado " + resultadoEncode + " não é o esperado ('alô, galera de cowboy!1! kkk').");
}

resultadoEncode = encode(2755300, "o coração da zebra não é listrado kkk");

if (resultadoEncode === "q eqtcçãq fc bgdtc pãq é nkuvtcfq mmm") {
    console.log("A função de criptografar funcionou! O resultado " + resultadoEncode + " é o esperado.");
} else {
    console.log("Tente novamente, a função de criptografar flopou. O resultado " + resultadoEncode + " não é o esperado ('q eqtcçãq fc bgdtc pãq é nkuvtcfq mmm').");
}


let resultadoDecode  = decode(7, "QÉZZPJH UÃV JBYAL HIHJHAL RRR");

if (resultadoDecode === "JÉSSICA NÃO CURTE ABACATE KKK") {
    console.log("A função de decifrar funcionou! O resultado " + resultadoDecode + " é o esperado.");
} else {
    console.log("Tente novamente, a função de decifrar flopou. O resultado " + resultadoDecode + " não é o esperado ('JÉSSICA NÃO CURTE ABACATE KKK').");
}

resultadoDecode = decode(135000, "itwpi oitmzmhhh!!11!!");

if (resultadoDecode === "aloha galerezzz!!11!!") {
    console.log("A função de decifrar funcionou! O resultado " + resultadoDecode + " é o esperado.");
} else {
    console.log("Tente novamente, a função de decifrar flopou. O resultado " + resultadoDecode + " não é o esperado ('aloha galerezzz!!11!!').");
}

resultadoDecode = decode(2755300, "q eqtcçãq fc bgdtc pãq é nkuvtcfq mmm");

if (resultadoDecode === "o coração da zebra não é listrado kkk") {
    console.log("A função de decifrar funcionou! O resultado " + resultadoDecode + " é o esperado.");
} else {
    console.log("Tente novamente, a função de decifrar flopou. O resultado " + resultadoDecode + " não é o esperado ('o coração da zebra não é listrado kkk').");
}