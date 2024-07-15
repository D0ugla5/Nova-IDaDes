// 4) Peça ao usuário para digitar os nomes de 5 alunos e suas notas na prova de
// Matemática. Calcular a média de todas as notas acima de 5,0.

//digitar
let alunos = [];
let totalNotas = 0;
let totalAlunosAcima5 = 0;
for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite o nome do aluno " + (i + 1) + ":");
    let nota = parseFloat(prompt("Digite a nota do aluno " + (i + 1) + " na prova de Matemática:"));

    alunos.push({ nome: nome, nota: nota });
}
for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota > 5.0) {
        totalNotas += alunos[i].nota;
        totalAlunosAcima5++;
    }
}
let media = totalNotas / totalAlunosAcima5;
alert("A média das notas acima de 5,0 é: " + media.toFixed(2));