function encontrarMaior(n1, n2, n3) {
    let maior = n1;
    if (n2 > maior) {
        maior = n2;
    }
    if (n3 > maior) {
        maior = n3;
    }
    return maior;
}

function ordenarCrescente(n1, n2, n3) {
    let lista = [n1, n2, n3];
    for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < lista.length - 1; j++) {
            if (lista[j] > lista[j + 1]) {
                let temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;
            }
        }
    }
    return lista;
}

function verificarPalindromo(texto) {
    let textoMinusculo = texto.toLowerCase();
    let textoLimpo = "";
    
    for (let i = 0; i < textoMinusculo.length; i++) {
        if (textoMinusculo[i] !== " ") {
            textoLimpo += textoMinusculo[i];
        }
    }
    
    let invertido = "";
    for (let i = textoLimpo.length - 1; i >= 0; i--) {
        invertido += textoLimpo[i];
    }
    
    if (textoLimpo === invertido && textoLimpo.length > 0) {
        return "é um palíndromo";
    } else {
        return "não é um palíndromo";
    }
}

function verificarSubconjunto(palavra1, palavra2) {
    if (palavra1 === undefined || palavra2 === undefined) {
        return "erro";
    }
    if (palavra1 === "" || palavra2 === "") {
        return "erro";
    }
    
    let p1 = palavra1.toLowerCase();
    let p2 = palavra2.toLowerCase();
    
    if (p1.indexOf(p2) !== -1) {
        return "é um subconjunto";
    } else {
        return "não é um subconjunto";
    }
}

function obterDiaDaSemana(dataString) {
    let partes = dataString.split("-");
    let ano = parseInt(partes[0]);
    let mes = parseInt(partes[1]) - 1;
    let dia = parseInt(partes[2]);
    
    let data = new Date(ano, mes, dia);
    let diaSemana = data.getDay();
    
    if (diaSemana === 0) {
        return "Domingo";
    } else if (diaSemana === 1) {
        return "Segunda-feira";
    } else if (diaSemana === 2) {
        return "Terça-feira";
    } else if (diaSemana === 3) {
        return "Quarta-feira";
    } else if (diaSemana === 4) {
        return "Quinta-feira";
    } else if (diaSemana === 5) {
        return "Sexta-feira";
    } else if (diaSemana === 6) {
        return "Sábado";
    } else {
        return "Data inválida";
    }
}