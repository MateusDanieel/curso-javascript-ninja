(function() {
    
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    var person = {
        name: 'Mateus',
        lastname: 'Daniel da Silva',
        age: 22
    };
    console.log( 'Propriedades de "person":' );

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log( Object.keys(person) );

    /*
    Crie um array vazio chamado `books`.
    */
    var books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    books = [
        {name: 'Harry Potter e as Relíquias da Morte', pages: 692},
        {name: 'Star Wars: Marcas da Guerra', pages: 415},
        {name: 'Assassins Creed: Irmandade ', pages: 348},
    ];

    // APESAR DE FUNCIONAR, ERA ESPERADO QUE FOSSE UTILIZADO O MÉTODO push(), COMO A SEGUIR:
    /*
        books.push({ name: 'jQuery Mobile', pages: 250 });
        books.push({ name: 'Javascript de Alto Desempenho', pages: 150 });
        books.push({ name: 'CSS3', pages: 280 });
    */

    console.log( '\nLista de livros:' );

    /*
    Mostre no console todos os livros.
    */
    console.log( books );

    console.log( '\nLivro que está sendo removido:' );
    /*
    Remova o último livro, e mostre-o no console.
    */
    console.log( books.pop() );
    // O '.pop()' RETORNA O ITEM QUE ELE REMOVEU
    // ESSE RETORNO TAMBÉM PODERIA SER ATRIBUIDO A UMA VARIÁVEL, EXEMPLO:
    /*
        var livroDel = books.pop(); // livroDel VAI RECEBER O VALOR DO ITEM DELETADO
        console.log(livroDel);
    */

    console.log( '\nAgora sobraram somente os livros:' );
    /*
    Mostre no console os livros restantes.
    */
    console.log( books );

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    var strBooks = JSON.stringify(books);
    console.log( '\nLivros em formato string:' );

    /*
    Mostre os livros nesse formato no console:
    */
    console.log(strBooks);

    /*
    Converta os livros novamente para objeto.
    */
    JSON.parse(strBooks); // ERRADO! VOCÊ DEVIA USAR O 'parse()' ATRIBUINDO ELE A OUTRA VARIÁVEL! O CORRETO SERIA: strBooks = JSON.parse(strBooks)
    console.log( '\nAgora os livros são objetos novamente:' );

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    console.log( strBooks ); // ERRADO! ERA ESPERADO QUE UTILIZASSE O 'for' PARA PREENCHER OS VALORES! O CORRETO SERIA:
    /*
        for(var i = 0; i < books.length; i++) { // ENQUANTO 'i' FOR MENOR QUE A QTD DE ITENS NO ARRAY 'books'
            
            for( var prop in books[i] ) {
                console.log( prop + ': ' +  books[i][prop] );
            }

        } 
    */

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = ['M', 'A', 'T', 'E', 'U', 'S'];
    console.log( '\nMeu nome é:' );

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(myName.join(''));

    console.log( '\nMeu nome invertido é:' );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log( myName.reverse() ); // PODIA TAMBÉM TER COLOCADO UM .join() NA SEQUENCIA PARA TRAZER CONVERTIDO

    console.log( '\nAgora em ordem alfabética:' );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log( myName.sort() );

}());
