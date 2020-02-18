(function() {

    'use strict';

    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Crie um arquivo index.html e adicione esse script à ele.
    */

    /*
    Em todos os exercícios desse desafio, nós vamos utilizar expressões
    regulares! Para isso, iremos usar o texto abaixo. Coloque-o em uma
    variável chamada `text`:
    "Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro."
    */
    var text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.';

    /*
    Vamos começar com umas brincadeiras fáceis :D
    Troque o nome "Manuel Marques de Sousa" pelo seu nome, e mostre o resultado
    no console:
    */
    console.log( 'Adicionando seu nome no texto:' );
    var altNome = text.replace(/Manuel Marques de Sousa/, 'Mateus Daniel da Silva');
    console.log(altNome);

    // CERTO! MAS PODIA TER CHAMADO DIRETO DO CONSOLE!
    // console.log( text.replace(/Manuel Marques de Sousa/g, 'Mateus Daniel da Silva') );

    /*
    Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
    console.
    Ex: Se você for da São Paulo, substitua por "paulista".
    */
    console.log( '\nTrocando naturalidade:' );
    var altNac = text.replace(/brasileiro/, 'paulista');
    console.log(altNac);

    // CERTO! MAS PODIA TER CHAMADO DIRETO DO CONSOLE!
    // console.log( text.replace(/brasileiro/g, 'paulista') );

    /*
    Substitua todos os números por um traço `-`. Cada caractere de número deve
    ser um traço. Mostre o resultado no console:
    */
    console.log( '\nTrocando números por -:' );
    var altNmr = text.replace(/\d/g, '-');
    console.log( altNmr );

    // CERTO! MAS PODIA TER CHAMADO DIRETO DO CONSOLE!
    // console.log( text.replace(/\d/g, '-') );
    // OU
    // console.log( text.replace(/[0-9]/g, '-') );

    /*
    Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
    minúsculo por "0" (número zero). Mostre o resultado no console:
    */
    console.log( '\nTrocando de "D" a "h" por "0":' );
    var altDh = text.replace(/[D-h]/g, 0); 
    console.log( altDh ); /* ERRADO! ENTRE CARACTERES MAIUSCULO E MINUSCULOS TEM OUTROS CARACTERES!
                             O CORRETO SERIA:
                             console.log( text.replace( /[D-Hd-h]/g, 0 ) );
    */

    /*
    Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
    Mostre o resultado no console:
    */
    console.log( '\nTrocando "A" e "a" por "4":' );
    var altAa = text.replace(/[Aa]/g, 4);
    console.log( altAa );

    // CERTO! MAS PODIA TER CHAMADO DIRETO DO CONSOLE!
    // console.log( text.replace(/[Aa]/g, 4) );

    // TAMBÉM PODERIA SER FEITO DA SEGUINTE FORMA:
    // console.log( text.replace(/A|a/g, 4) ); // OU
    // console.log( text.replace(/a/gi, 4) );

    /*
    Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
    o método `toUpperCase()`. Mostre o resultado no console:
    */
    console.log( '\n"O Centauro de Luvas" em caixa alta:' );
    var altFrase = text.replace(/O Centauro de Luvas/, function(el) {
        return el.toUpperCase();
    });
    console.log( altFrase );

    // CERTO! MAS PODIA TER CHAMADO DIRETO DO CONSOLE!
    /* console.log( text.replace(/O Centauro de Luvas/, function(el) {
        return el.toUpperCase();
    }) )*/

    /*
    Agora iremos substituir as datas no formato "13 de junho de 1804" para
    "13/06/1804". A primeira coisa a fazer é criar uma função chamada
    `getMonthNumber`, que irá receber um parâmetro (será o nome do mês) e deverá
    retornar o número correspondente a esse mês.
    Ex: Se o usuário entrar com "março", deve retornar "03" (em string mesmo).
    Números com menos de dois dígitos devem ter um zero na frente.
    Crie então a função e mostre no console os retornos para os meses de março,
    setembro e dezembro.
    Use um console.log para cada mês, usando a frase:
    "O mês de [NOME DO MÊS] é representado pelo número [NÚMERO DO MÊS]."
    */
    console.log( '\nMeses representados por números:' );

    function getMonthNumber(mes) {
        var calendar = [
            {id:'01', month:'janeiro'},
            {id:'02', month:'fevereiro'},
            {id:'03', month:'março'},
            {id:'04', month:'abril'},
            {id:'05', month:'maio'},
            {id:'06', month:'junho'},
            {id:'07', month:'julho'},
            {id:'08', month:'agosto'},
            {id:'09', month:'setembro'},
            {id:'10', month:'outubro'},
            {id:'11', month:'novembro'},
            {id:'12', month:'dezembro'}
        ];

        var getMonth = calendar.filter(function(item, index, array) {
            return mes === item.month;
        });

        return getMonth[0];

    }

    console.log( 'O mês de ' + getMonthNumber('março').month + ' é representado pelo número ' + getMonthNumber('março').id + '.' );
    console.log( 'O mês de ' + getMonthNumber('setembro').month + ' é representado pelo número ' + getMonthNumber('setembro').id + '.' );
    console.log( 'O mês de ' + getMonthNumber('dezembro').month + ' é representado pelo número ' + getMonthNumber('dezembro').id + '.' );

    // FUNCIONA! MAS PODEMOS SIMPLIFICAR =)

    /*
        function getMonthNumber(monthName) {
            var months = {
                'janeiro': '01',
                'fevereiro': '02',
                'março': '03',
                'abril': '04',
                'maio': '05',
                'junho': '06',
                'julho': '07',
                'agosto': '08',
                'setembro': '09',
                'outubro': '10',
                'novembro': '11',
                'dezembro': '12'
            };

            return months[ monthName ];
        }

        console.log("O mês de março é representado pelo número " + getMonthNumber('março') + ".");
        console.log("O mês de março é representado pelo número " + getMonthNumber('setembro') + ".");
        console.log("O mês de março é representado pelo número " + getMonthNumber('dezembro') + ".");
    */

    /*
    Agora, declare uma variável chamada `regexDate` que irá receber a expressão
    regular que irá fazer o match com as datas. Crie grupos de captura para o
    dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
    meses que estão no texto, não precisa adicionar todos.
    Com o que vimos até agora, você consegue fazer :D
    Mostre a regex no console.
    */
    console.log( '\nRegex que vai fazer o match com as datas do texto:' );
    
    /* 
        var regexDate = /(\d\d) de (junho|julho) de (\d\d\d\d)/g;
    */

    /*
    Agora crie a função que irá fazer o replace dos dados. A função será chamada
    de `replaceDate`. Ela deve retornar a data no formato:
    "[DIA]/[MÊS]/[ANO]"
    Após criar a função, faça o replace das datas no texto, mostrando no
    console o resultado.
    */
    console.log( '\nReplace de datas:' );

    /*
        function replaceDate(regex, day, month, year) {

            return day + '/' + getMonthNumber( month ) + '/' + year;

        }

        console.log( text.replace( regexDate, replaceDate ) );
    */

}());
