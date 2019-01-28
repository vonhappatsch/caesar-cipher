# Cifra de César - Projeto I

# # Sobre a Cifra de César
A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos
primeiros tipos de criptografias conhecidos na história. É um tipo de cifra por
substituição, em que uma letra no texto original é substituída por outra,
seguindo um número fixo para essa subtituição.

O imperador Júlio César usou essa cifra para enviar ordens aos seus generais no
campo de batalha. Essa é uma das técnicas mais simples e mais usadas para
cifrar mensagens.

Por exemplo se usarmos o deslocamento de 3:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Atualmente todas as cifras de substituição alfabética simples, são descifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de
César muitas vezes pode fazer parte de um sistema mais complexo de
criptografia, como a cifra de Vigenère, e tem aplicação no sistema ROT13.

# # O projeto e seus objetivos
O objetivo principal é a construção de uma aplicação web, usando os conhecimentos de **User Experience Design** e de **JavaScript**. Isso inclui o desenho do produto pensando nos usuários, construção da interface, escutar eventos básicos do DOM, escrever a lógica que cifra e descifra mensagens, realizar testes básicos que comprovem (e documentem) esta lógica e manipular o DOM para que ele mostre e imprima os resultados.

A lógica do projeto deve estar implementada inteiramente em vanilla JavaScript(ES6).

# # Descrição do projeto
A interface permite que o usuário insira uma mensagem seja para criptografar ou decifrar usando a Cifra de César e de acordo com a chave (offset - deslocamento) que ele escolher e inserir.
O resultado é impresso na tela depois que o usuário insere a mensagem, a chave e aperta o botão correspondente.

# # # A lógica
![diagrama-de-blocos](https://github.com/vonhappatsch/caesar-cipher/blob/master/diagrama.png)

Os **dados de entrada** são: Mensagem para criptografar ou Mensagem para decifrar e chave de deslocamento
O **processo** é: Utilizando a fórmula matemática da Cifra de César, o processo necessário para criptografar uma mensagem é: ((CódigoASCIIdaLetra - CódigoASCIIdaPrimeiraLetraDoAlfabeto + offset) % 26) + CódigoASCIIdaPrimeiraLetraDoAlfabeto. Sendo 26 o tamanho do alfabeto. Para decifrar, seria necessário trocar apenas o sinal de adição por subtração antes do offset, assim voltando as letras da mensagem para suas posições iniciais. O processo é repetido da primeira até a última letra da mensagem, armazenando/concatenando o resultado em uma string vazia através do `for`.
Os **dados de saída** são: Mensagem criptgrafada OU Mensagem decifrada
`Recebe mensagem => Recebe Chave => Implementa a fórmula => Imprime mensagem de resultado`

## Checklist
### Parte Obrigatória
* [ ] `README.md` com explicações e desenho do projeto
* [ ] Usar VanillaJS.
* [ ] Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser
  cifrado.
* [ ] Mostrar o resultado da cifra corretamente.
* [ ] Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser
  descifrado.
* [ ] Mostrar o resultado descifrado corretamente.
* [ ] Permitir escolher o `offset` (_deslocamento_) a ser usado na
  cifragem/descifragem.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Criar testes unitários.

### Hacker Edition
* [ ] Permite usar um `offset` (_deslocamento_) negativo
* [ ] Cifra/descifra _outros_ caracteres (espaços, pontuação, `ã`, `á`, ...)
