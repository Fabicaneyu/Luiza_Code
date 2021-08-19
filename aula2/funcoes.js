/*

estrutura de function é nome da função mais parentesis em cima e em baixo
function calculoIMC(){

}

calculoIMC()
*/

// função com nome
function calculoIMC(altura, peso) {
    console.log((peso / (altura * altura)).toFixed(2))
}

calculoIMC(1.53, 100);



// função anonima
// sentenã é o que ela executa
// parametro é o que ela recebe
let funcaoAnonima = function (altura, peso) {
    console.log((peso / (altura * altura)).toFixed(2))
}

funcaoAnonima(1.53, 60)

// Arrial function

let funcaoArrow = (altura, peso) => {
    console.log((peso / (altura * altura)).toFixed(2))
}
funcaoArrow(1.50, 50)

//objeto literal
//chave e valor
//this é usado para referenciar uma chave que esta dentro do proprio corpo
//objeto = product
// chave = name...price e etc
// toda function deve ter um retorno
const product = {
    name: 'Iphone',
    price: 6000,
    discount: 5,
    finalPrice: function () {
        let result = (this.price - (this.price * this.discount) / 100); // trabalha com as chaves por dentro da função
        return Intl.NumberFormat('pt-BR', { //Intl é de internacionalização
            style: 'currency',
            currency: 'BRL'}).format(result)
    }
}
console.log(product.finalPrice()) // chama o objeto por fora


//Data
const quediaehoje = new Date();
//console.log(quediaehoje.toDateString());
console.log(new Intl.DateTimeFormat('pt-BR').format(quediaehoje));
