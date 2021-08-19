//2 objetos 
// pessoa a e b
// nome, peso, altura, idade 
// função que retorna o IMC e o ano de nascimento
//retorna no console
//ou retorna na função e invoca a função

const pessoaa = {
    nome: "Pai",
    peso: 60,
    altura: 1.60,
    idade: 60,
    imca: function(){
        let result = ((this.peso / (this.altura * this.altura)).toFixed(2));
        return(result)
    },
    anonascimentoa: function(){
        let anonascimento = (2021 - this.idade);
        return (anonascimento)
    }
}

console.log(pessoaa.imca(),pessoaa.anonascimentoa())

const pessoab = {
    nome:'Mami',
    peso: 70,
    altura: 1.45,
    idade: 65,
    imcb: function(){
        let result = ((this.peso/(this.altura*this.altura)).toFixed(2));
        return (result)
    },
    anonascimentob: function(){
        let anonascimento = (2021 - this.idade);
        return (anonascimento)
    }
}
console.log(pessoab.imcb(),pessoab.anonascimentob())