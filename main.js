const alunos = [
  {nome: "João", nota: 8.5 },
  {nome: "Maria", nota: 3.5 },
  {nome: "Pedro", nota: 7.8 },
  {nome: "Ana", nota: 5 },
  {nome: "Carlos", nota: 8.0 }
];

function notaDoAluno() {
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nota >= 6) {
            console.log(alunos[i].nome)
        }
        
    }
}

notaDoAluno();