let a = 12;
let b = 12;
console.log(a === b);

b = '12';
console.log(a == b);

b='12';
console.log(a != b);
console.log(a !== b);

let isWoman = true;
let isMan = false;
isWoman ? console.log('sim') : console.log('não') // retorna sim

isWoman || isMan ? console.log('sim') : console.log('nao') // retorna sim

isWoman && isMan ? console.log('sim') : console.log('nao') // retorna nao 