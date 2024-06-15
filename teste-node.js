const prompt = require('readline-sync');
const n1 = Number(prompt.question("Digite sua primeira nota "));
const n2 = Number(prompt.question("Digite sua segunda nota ")); 
let media = ((n1 + n2) /2); 
console.log("Sua média é: ", media);