const alunos = [
  {nome: "João", nota: 8.5 },
  {nome: "Maria", nota: 3.5 },
  {nome: "Pedro", nota: 7.8 },
  {nome: "Ana", nota: 5 },
  {nome: "Carlos", nota: 8.0 }
];

function notaDoAlunoMaiorSeis(alunos) {
    return alunos.nota >= 6
}

function notaDoAluno() {
    const aprovados = alunos.filter(notaDoAlunoMaiorSeis);
    aprovados.forEach(aluno => {
        console.log(aluno.nome)
    });
}

notaDoAluno();