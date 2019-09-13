//* Bind

// function generic(){
//     console.log(this.sound)
// }

// let dog = {
//      sound : "Au Au",
//      Speak : generic
// }

// let cat = {
//     sound : "Miau Miau",
//     Speak : generic
// }

// dog.Speak()
// cat.Speak()

// let bindFunction = generic.bind(dog)

// bindFunction()


//*Arrow function

// let dobro = function(x){
//     console.log(2 * x)
// }

// dobro(7)

// let dobro = x => 2 * x

// console.log(dobro(7))

// Arrow functons reconhece o this como scopo global e não o objeto

//*Callback

// function doido(){
//     console.log("Seu cú")
// }

// function exe(s,nome){
//     s(),
//     console.log(nome)
// }

// exe(doido, "Leo")

// let usuarios = ["Adriano", "Pedro", "João"]

// function inserirUsu(nome, callback){
//     setTimeout(() => {
//         usuarios.push(nome);
//         callback();
//     },1000)
// }

//     function listarUsuarios(){
//         console.log(usuarios)
//     }

//     inserirUsu("Leo",listarUsuarios)

let usuarios = ["Adriano", "Pedro", "João"]

function inserirUsu(nome){

let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        usuarios.push(nome);
        let error = false
        if(!error){
            resolve()
        }
        else{
            reject({msg: "Erro"})
        }
        
    },1000)
})

return promise
   
}

    function listarUsuarios(){
        console.log(usuarios)
    }

    // inserirUsu("Leo").then(listarUsuarios).catch((error) => {
    //     console.log(error.msg)
    // })

    async function executar(){
       await inserirUsu("Leo")
        listarUsuarios();
    }
executar()
    