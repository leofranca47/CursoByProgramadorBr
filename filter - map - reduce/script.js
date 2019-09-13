function novoAluno(nome, idade){
    return{nome, idade}
}

let alunos = [
    novoAluno("marcos", 20),
    novoAluno("jupter", 60),
    novoAluno("goku", 21),
    novoAluno("chichi", 31)
]
// Filter
// function temMenosDe30(aluno){
//     return aluno.idade < 30
// }

// function temMaisDe30(aluno){
//     return aluno.idade > 30
// }

// console.log(alunos.filter(temMaisDe30))


//map
// function nomeEidade(aluno){
//     return aluno.nome + " tem " + aluno.idade + "anos"
// }

//map sem usar o map
// for(let i = 0; i < alunos.length; i++){
//   console.log(alunos[i].nome + " tem " + alunos[i].idade + " anos")
// }

// console.log(alunos.map(nomeEidade))

//reduce

// function idadeDaTurma(total, aluno){
//     return total + aluno.idade
// }

// console.log(alunos.reduce(idadeDaTurma(0, alunos)))

//reduce sem usar reduce
// let total = 0
// let aluno = 0

// for(let i = 0; i < alunos.length; i++){
//     aluno += total + alunos[i].idade 
// }

// console.log(aluno)