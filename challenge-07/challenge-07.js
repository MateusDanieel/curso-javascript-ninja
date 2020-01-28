/*
Crie um array com 5 items (tipos variados).
*/
var arr = ['Mateus', null, [1, 2, 3], {obj: 'teclado'}, 8];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item) {
    arr.push(item);

    return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem(['Jaqueline', null, {carro: 'Golf'}]);

console.log(arr);

// A RESPOSTA MAIS ESPERADA SERIA:
// console.log( addItem([ 'Jaqueline', null, {carro: 'Golf'} ]) );

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é ' + arr[5][1] + '.');

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + arr.length + ' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + arr[5].length + ' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );

var i = 10;

while( i >= 10 && i <= 20 ) {
    i % 2 === 0 ? console.log(i) : '';
    i++;
} // O 'i >= 10' FICOU MEIO INÚTIL, POIS O VALOR DE 'i' JÁ ERA 10, PORÉM, FUNCIONA!

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );

var i = 10;

while( i >= 10 && i <= 20 ) {
    i % 2 !== 0 ? console.log(i) : '';
    i++;
} // O 'i >= 10' FICOU MEIO INÚTIL, POIS O VALOR DE 'i' JÁ ERA 10, PORÉM, FUNCIONA!

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );

for(var i = 100; i >= 100 && i <= 120; i++) {
    i % 2 === 0 ? console.log(i) : '';
} // O 'i >= 100' FICOU MEIO INÚTIL, POIS O VALOR DE 'i' JÁ ERA 100, PORÉM, FUNCIONA!

console.log( 'Números ímpares entre 111 e 125:' );

for(var i = 111; i >= 111 && i <= 125; i++) {
    i % 2 !== 0 ? console.log(i) : '';
} // O 'i >= 111' FICOU MEIO INÚTIL, POIS O VALOR DE 'i' JÁ ERA 111, PORÉM, FUNCIONA!
