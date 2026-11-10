let totalPessoas = 10;
let somaIdades = 0;
let maisVelha = 0;
let maisNova = 999;
let qtdPessimo = 0;
let qtdOtimoBom = 0;
let qtdMulheres = 0;
let qtdHomens = 0;
let qtdOutros = 0;

for (let i = 1; i <= totalPessoas; i++) {
    let idade = Number(prompt("Digite a idade da pessoa " + i + ":"));
    let sexo = prompt("Digite o sexo (F, M ou O):");
    let opiniao = Number(prompt("Digite a opinião (4=Ótimo, 3=Bom, 2=Regular, 1=Péssimo):"));

    somaIdades = somaIdades + idade;

    if (idade > maisVelha) {
        maisVelha = idade;
    }
    if (idade < maisNova) {
        maisNova = idade;
    }

    if (opiniao == 1) {
        qtdPessimo = qtdPessimo + 1;
    }
    if (opiniao == 3 || opiniao == 4) {
        qtdOtimoBom = qtdOtimoBom + 1;
    }

    if (sexo == "F" || sexo == "f") {
        qtdMulheres = qtdMulheres + 1;
    } else if (sexo == "M" || sexo == "m") {
        qtdHomens = qtdHomens + 1;
    } else {
        qtdOutros = qtdOutros + 1;
    }
}

let mediaIdade = somaIdades / totalPessoas;
let porcentagem = (qtdOtimoBom * 100) / totalPessoas;

alert("RESULTADOS DA PESQUISA:\n" +
      "Média de idade: " + mediaIdade.toFixed(1) + "\n" +
      "Pessoa mais velha: " + maisVelha + "\n" +
      "Pessoa mais nova: " + maisNova + "\n" +
      "Pessoas que acharam péssimo: " + qtdPessimo + "\n" +
      "Porcentagem ótimo e bom: " + porcentagem.toFixed(1) + "%\n" +
      "Mulheres: " + qtdMulheres + "\n" +
      "Homens: " + qtdHomens + "\n" +
      "Outros: " + qtdOutros);