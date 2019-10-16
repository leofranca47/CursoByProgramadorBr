// // console.log("Hello World!");

// let calc = require("./calc");

// let args = process.argv.slice(2);


// let a = Number(args[0]);
// let b = Number(args[1]);
// let c = calc.soma(a,b)



// console.log(c);

// let fs = require('fs');

// //cria um arquivo com essas informações, e toda vez subescreve apagando ele
// fs.writeFile('teste.txt', 'Hello World', function(error){
//     if(error){throw error};
//     console.log('Arquivo criado com sucesso');
// })

// //com o appendFile adiciona informações no arquivo
// fs.appendFile('teste.txt', ' - Hi Leo', function(error){
//     if(error){throw error};
//     console.log('Arquivo atualizado com sucesso');
// })

// //com o unlink apaga o arquivo
// fs.unlink('teste.txt', function(error){
//     if(error){throw error};
//     console.log('Arquivo apagado com sucesso');
// })

// //renomear o arquivo
// fs.rename('teste.txt', 'NovoNome.txt', function(error){
//     if(error){throw error};
//     console.log('Arquivo renomeado com sucesso');
// })

// //ler arquivo
// fs.readFile('teste.txt','UTF8', function(error,data){
//     if(error){throw error};
//     console.log(data);
// })

//programa que converte todas as letras para uppercase
// let fs = require('fs');

// let args = process.argv.slice(2);

// let fileName = args[0];

// fs.readFile(fileName, "UTF8", (error, data)=>{
//     if(error) throw error;

//     fs.writeFile(fileName + "_Uppercase", data.toUpperCase(), (error)=>{
//         if(error) throw error;

//         console.log("Arquivo gerado com sucesso");
//     })
// })