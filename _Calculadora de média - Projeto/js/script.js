var valorEmDolar = prompt("Digite o valor em Dolar");
var cotacaoDolar = 5.32;

var valorEmReal = valorEmDolar * cotacaoDolar;
valorEmreal = valorEmReal.toFixed(2);

alert("O valor de " + valorEmDolar + " em Real é: R$" + valorEmReal);
