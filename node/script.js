// console.log("Hello World!");

let calc = require("./calc");

let args = process.argv.slice(2);


let a = Number(args[0]);
let b = Number(args[1]);
let c = calc.soma(a,b)



console.log(c);