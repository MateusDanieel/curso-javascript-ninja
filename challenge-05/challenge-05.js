/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = [ 10, 'Mateus', null, false, qlq = [1, 2] ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunct(array) {
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myFunct( qualquer )[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunct2(array, index) {
    return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayzin = [ 'Silva', 20, k = {b:0}, w = [1, 3, 14], 27.5 ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( myFunct2( arrayzin, 0 ) );
console.log( myFunct2( arrayzin, 1 ) );
console.log( myFunct2( arrayzin, 2 ) );
console.log( myFunct2( arrayzin, 3 ) );
console.log( myFunct2( arrayzin, 4 ) );

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(name) {

    livro = {

        'Harry Potter': {
            quantidadePaginas: 375,
            autor: 'JK Rowling',
            editora: 'Bloomsbury'
        },

        'Guerra Civil': {
            quantidadePaginas: 247,
            autor: 'Stan Lee',
            editora: 'Marvel'
        },

        'Assassins Creed': {
            quantidadePaginas: 488,
            autor: 'Sei lá',
            editora: 'Ubisoft'
        },
        
    };

    if(!name) {
        return livro;
    }

    return livro[ name ];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var book_name = 'Harry Potter';

console.log('O livro ' + book_name + ' tem ' + book(book_name).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + book_name + ' é ' + book(book_name).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + book_name + ' foi publicado pela editora ' + book(book_name).editora + '.');
