//classe
// cada classe tem atributos
// atributos sempre são estar em um construtor
//função vc a invoca diretamente
// na classe vc instancia

class Exemplo {
    constructor (name, age){ // construtor sempre exije parametros
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log('Noem da pessoa')
    }

}

let issoEUmaClasse = new Exemplo();  // nome em camel case, vc inicia com minuscula e proxima palavra inicia com maiuscula

issoEUmaClasse.speak()

//rest operator
let arrTester = { name: 'aluno'};
let arrTesterNovo = { name: 'aluno'};

let arrStudents = [];

let usandoOSpread = [ ...arrTester, arrTesterNovo]

//Resultado do spread
console.log('resultado do spread', usandoOSpread)
console.log(arrTester);
console.log(arrTesterNovo);
console.log(arrTester);
