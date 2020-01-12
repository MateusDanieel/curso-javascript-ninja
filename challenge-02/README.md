# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y){
  return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var chamaFunct = soma(1, 2) + 5;

// Qual o valor atualizado dessa variável?
8

// Declare uma nova variável, sem valor.
var v;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adc(){
  v = 'VALOR';
  return v;
} /* ERRADO! 
     A RESOLUÇÃO ESPERADA ERA:
     
     function adc(){
      v = 25;
      return 'O valor da variável agora é ' + v;
     }
*/

// Invoque a função criada acima.
adc();

// Qual o retorno da função? (Use comentários de bloco).
/*
  O retorno da função foi 'VALOR'.
*/ // ERRADO! A RESOLUÇÃO ESPERADA ERA 'O RETORNO DA VARIÁVEL FOI 25'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function teste(x, y, z){
  if(x === undefined || y === undefined || z === undefined){
    return "Preencha todos os valores corretamente!";
  } else {
    return x * y * z + 2; 
    // TAMBÉM PODERIA USAR "(x * y * z) + 2"
    // MAS DESSE JEITO FUNCIONA, POIS NA MATEMÁTICA, DIVISÃO E MULTIPLICAÇÃO TEM PRIORIDADE EM RELAÇÃO A ADIÇÃO E SUBTRAÇÃO
  } // NESSE CASO O ELSE NÃO ERA NECESSÁRIO, PORÉM FUNCIONA DA MESMA FORMA
}

// Invoque a função criada acima, passando só dois números como argumento.
teste(1, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
teste(7, 17, 27);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// O valor retornado foi '3215'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function m(x, y, z){
  if(x >= 0 && y === undefined && z === undefined){
    /* APESAR DE TAMBÉM FUNCIONAR ATÉ CERTO PONTO, O CORRETO SERIA: 
      if(x !== undefined && y === undefined && z === undefined) {...}
    */
    return x;
  } else if (x >= 0 && y >= 0 && z === undefined){
    /* APESAR DE TAMBÉM FUNCIONAR ATÉ CERTO PONTO, O CORRETO SERIA: 
      if(x !== undefined && y !== undefined && z === undefined) {...}
    */
    return x + y;
  } else if (x >= 0 && y >= 0 && z >= 0){
     /* APESAR DE TAMBÉM FUNCIONAR ATÉ CERTO PONTO, O CORRETO SERIA: 
      if(x !== undefined && y !== undefined && z !== undefined) {...}
    */
    return (x + y) / z;
  } else if (x === undefined && y === undefined && z === undefined){
    return false;
  } else {
    return null;
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
m() // false
m(17) // 17
m(17, 7) // 24
m(10, 2, 2) // 6
```
