var firebaseConfig = {
    apiKey: "AIzaSyArCC8CdEq5t8_maOwWq7XbghjaSHlgRoU",
    authDomain: "colegio-aabd3.firebaseapp.com",
    databaseURL: "https://colegio-aabd3.firebaseio.com",
    projectId: "colegio-aabd3",
    storageBucket: "colegio-aabd3.appspot.com",
    messagingSenderId: "66072377918",
    appId: "1:66072377918:web:552df81e98d5d878"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let db = firebase.firestore()

//regras de permissoes
db.collection("turmaA").get().then(snapshot => {
  snapshot.forEach(item => {
    console.log(item.data())
  })
}).catch(error => {
  console.log(error)
})

//Ler todos os dados de uma coleção
// db.collection("turmaA").get().then((snapshot) => {
//     snapshot.forEach((doc) => {
//         let aluno = doc.data()
//         console.log(aluno.nome)
//     })
// })

// let docRef = db.collection("turmaA").doc("X286ClAUHDVk4e7vwpXu")

// docRef.get().then((doc) => {
//     console.log(doc.data().nome)
// })

//usando o where no firebase
// db.collection("turmaA").where("nota2", ">", 5)
//                        .where("nota2", "<", 10).get().then(snapshot => {
//   snapshot.forEach(doc => {
//     let aluno = doc.data()
//     console.log(aluno.nome, aluno.nota1, aluno.nota2)
//   })
// })

//adicionar novo documento no firebase via codigo com id automatico
// const TURMA = "turmaA"

// let db = firebase.firestore();

// db.collection(TURMA).add({
//   nome: "Juliano",
//   sobrenome: "Ribeiro",
//   notas: {nota1: 9.5, nota2: 5}
// }).then(doc => {
//   console.log("Documento inserido com sucesso", doc)
// }).catch(err =>{
//   console.log(err)
// })

//adicionar novo documento no firebase via codigo com id manual
//com o set podemos alterar o documento, para alterar apenas um campo sem apagar os outros utilizamos depois do set ,{merge: true}
// const TURMA = "turmaA"

// let db = firebase.firestore()

// db.collection(TURMA).doc("AlunoNovo").set({
//   nome: "Mariana",
//   sobrenome: "chavaska quante",
//   notas: {nota1: 6, nota2: 8}
// }).then(() => {
//   console.log("Documento inserido com sucesso")
// }).catch(err => {
//   console.log(err)
// })

//utilizando o update para modificar
// const TURMA = "turmaA"

// let db = firebase.firestore()

// db.collection(TURMA).doc("AlunoNovo").update({
//   nome: "Mariana",
//   notas: {nota1: 7, nota2: 8},
//   sobrenome: "crente"
  
// }).then(() => {
//   console.log("Documento inserido com sucesso")
// }).catch(err => {
//   console.log(err)
// })

//no caso de precisar inserir mais informações em um array  nomeDoArray: firebase.firestore.FieldValue.arrayUniom("novoCampo") pra remover arrayRemove
//para incremetar uma variavel é só usar o increment(valor)

//executando dados realtime com firebase
// db.collection("turmaA").where("nota2", ">", 5)
//                        .where("nota2", "<", 10).onSnapshot(snapshot => {
//   snapshot.forEach(doc => {
//     let aluno = doc.data()
//     console.log(aluno.nome, aluno.nota1, aluno.nota2)
//   })
// })

//para apagar um campo monta uma estrutura de update e coloca o comando variavel: firebase.firestore.FieldValue.delete()

//criar novo usuario
// let newUserEmail = "nocoteste@teste.com"
// let newUserPassword = "123abc"

// let auth = firebase.auth()

// auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword).then(user =>{
//   console.log(user)
// }).catch(error =>{
//   console.log(error)
// })

//logando com usuario
// let auth = firebase.auth()
// function login(){
//   let userEmail = "nocoteste@teste.com"
//   let UserPassword = "123abc"
// auth.signInWithEmailAndPassword(userEmail, UserPassword)
//     .then(loggedUser => {
//       console.log(auth.currentUser.email)
//     }).catch(error => {
//       console.log(error)
//     })
// }

//  login()

//verificar se tem usuario logado
//let auth = firebase.auth()
// function verifica(){
// auth.onAuthStateChanged(user => {
//   if(user){
//     console.log(user.email)
//   } else{
//     console.log("Ninguém logado")
//   }
// })
// }

// setTimeout(verifica, 2000)

//deslogar usuario
// let auth = firebase.auth()
// function logout(){
//   auth.signOut().then(() => {
//     console.log("usuário foi deslogado")
//   }).catch(error => {
//     console.log(error)
//   })
// }

// setTimeout(logout, 2000);