/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = ['Mateus', 10, null, true, false];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunct() {
    return [1, 2, 3];
}  // ERRADO! RESPOSTA ESPERADA:

/*
    function myFunct( arr ) {

        return arr;

    }
*/ 



/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myFunct()[1] );


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function newFunct([a, b, c], v) {
    x = [a, b, c];
    return x[v];
} // ERRADO! RESPOSTA ESPERADA:

/*
    function myFunct2( arr, index ) {
        return arr[ index ];
    }
*/

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var arrayNv = ['Daniel', undefined, 7, false, true]; 
// ERRADO! OS TIPOS DEVERIAM SER DIFERENTES
// var arrayNv = ['Ninja', 52.4, true, [ 1, 2, 'Daciuk' ], { b: 2 } ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

newFunct(arrayNv, 0);
newFunct(arrayNv, 1);
newFunct(arrayNv, 2);
newFunct(arrayNv, 3);
newFunct(arrayNv, 4); // ERRADO! RESPOSTA ESPERADA:

/* 
    console.log( myFunction( myarray2, 0 ) );
    console.log( myFunction( myarray2, 1 ) );
    console.log( myFunction( myarray2, 2 ) );
    console.log( myFunction( myarray2, 3 ) );
    console.log( myFunction( myarray2, 4 ) );
*/

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
        harryPotter: {
            quantidadePaginas: 500,
            autor: 'JK Rouling',
            editora: 'Sei lá'
        },

        guerraCivil: {
            quantidadePaginas: 400,
            autor: 'Stan Lee',
            editora: 'Marvel Comics'
        },

        assassinsCreed: {
            quantidadePaginas: 475,
            autor: 'Não Lembro',
            editora: 'Ubisoft'
        }
    };

    if(name === 'Harry Potter') {

        return livro.harryPotter;

    } else if (name === 'Guerra Civil') {

        return livro.guerraCivil;

    } else if (name === 'Assassins Creed') {

        return livro.assassinsCreed;

    } else {

        return livro;

    }
 } // FUNCIONA, PORÉM, NÃO ERA A RESPOSTA ESPERADA!

 /*

    function book ( bookName ) { 

        var allBooks = {
            'Segredos do Ninja Javascript': {
                quantidadePaginas: 488,
                autor: 'John Resig & Bear Bibeault',
                editora: 'Novatec'
            },

            'Introdução ao HTML': {
                quantidadePaginas: 220,
                autor: 'Bruce Lawson & Remy Sharp',
                editora: 'Alta Books'
            },

            'Smashing CSS': {
                quantidadePaginas: 283 ,
                autor: 'Erick A. Meyer',
                editora: 'Bookman'
            }
        };

        // SE O bookName NÃO FOI PASSADO 
        if( !bookName ) {
            return allBooks;
        }

        return allBooks[ bookName ];

        
    // OU ENTÃO, POSSO SUBSTITUIR A VERIFICAÇÃO ACIMA POR UM IF TERNARIO

    // return !bookName ? allBooks : allBooks[ bookName ];

        

    }

 */

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Guerra Civil tem ' + book('Guerra Civil').quantidadePaginas + ' páginas!');

// CERTO! PORÉMM PODE MELHORAR:
/*
    var bookName = 'Segredos do Ninja Javascript';
    console.log('O livro ' + bookName + ' tem ' + book( bookName ).quantidadePaginas + ' páginas!');
*/

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Harry Potter é ' + book('Harry Potter').autor + '.');

// CERTO! PORÉMM PODE MELHORAR:
/*
    var bookName = 'Segredos do Ninja Javascript';
    console.log('O autor do livro ' + bookName + ' é ' + book( bookName ).autor + '.');
*/

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Assassins Creed foi publicado pela editora ' + book('Assassins Creed').editora + '.');

// CERTO! PORÉMM PODE MELHORAR:
/*
    var bookName = 'Segredos do Ninja Javascript';
    console.log('O livro ' + bookName + ' foi publicado pela editora ' + book( bookName ).editora + '.');
*/
