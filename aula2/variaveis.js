//var
var nome = "Fabi";
console.log(nome);

nome = "Margarita";
console.log(nome);

//let
let nomeDaPessoa = "Elisama";
console.log(nomeDaPessoa);

nomeDaPessoa = "Fabi"
console.log(nomeDaPessoa)

//função
//variável dentro de uma função
//essa variável só existe dentro dessa função
let idade = (value) => { //value é um parametro, uma referencia
    let age = value;
    console.log(age)
}

idade(22);

//Const
const aluna = "Victor";
console.log(aluna);

//aluna = "Fabi"
//console.log(aluna)

//Objeto é sempre representado por chaves
// é nome valor
//objeto que carrega um conjunto de informações
let pessoa = {
    name:'Bianca', //string
    age:20, //int numerico
    stature: 1.53, //float numeros fracionados
    isWoman: true //boolean
}

console.log(pessoa.name)

//Arrays
//sempre inicia com indice 0
//São vetores
//só de numeros
//const newArr = [1,2,3,4]
//ou misturado
const newArr = [1,'nome', true, 2.2]
console.log(newArr[1])

//Typeof
console.log(typeof Symbol())

//Operadores
// ! = estou negando ele mesmo
// !! = transforma string em boleanos, só funciona com string
let estaVerificado = 'Nome';
console.log(!!estaVerificado);
console.log(estaVerificado);

//negação
/*
const inscricao = (person) => {
    let woman = person.isWoman;

    if(!woman) {
        console.log(`${person.name} Desenvolvedor`)
    } else {
        console.log(`${person.name} Desenvolvedora `)
    }
} 
inscricao(pessoa)
*/

//ternario
const inscricao = (person) => {
    let woman = person.isWoman;

    !woman ? console.log(`${person.name} Desenvolvedor`) : console.log(`${person.name} Desenvolvedora e tem ${person.age}`) //para acessar sempre coloca o nome do pai, neste caso é o person
} 
inscricao(pessoa)