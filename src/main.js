
const alunos = [
        {nome: "João", nota: 10},
        {nome: "Maria", nota: 8},
        {nome: "Pedro", nota: 7},
        {nome: "Ana", nota: 9},
        {nome: "Lucas", nota: 6},
        {nome: "Julia", nota: 5},
        {nome: "Rafael", nota: 4},
        {nome: "Isabela", nota: 3},
]

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);

console.log(alunosAprovados);