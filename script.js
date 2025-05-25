// Selecionar o display
let operacao = document.querySelector(".operacao");
operacao.innerText = "oi";

// Selecionar o resultado
let resultado = document.querySelector(".resultado");
resultado.innerText = "oi";

// Espressão
let expressaoAtual = "";

//Verificar se foi feito algum calculo ??????????????????????????????????????????????
let resultadoCalculo = false;

//Resposta
let resposta = 0;

// Função acionada
function apertou(valor) {
    console.log(valor);

    // Limpar
    if (valor === "C"){
        expressaoAtual = "";
        operacao.textContent = "0";
        resultado.textContent = "0"
        resultadoCalculo = false;
        return;
    }

    //Limpar o último caractere
    if (valor === "CE") {
        if (expressaoAtual.length > 1) {
            expressaoAtual = expressaoAtual.slice(0, -1);
        } else {
            expressaoAtual = "";
        }
        operacao.textContent = expressaoAtual === "" ? "0": expressaoAtual;
        return;
    }

    //Sinal de = chamamos a função calcular
    if (valor === "=") {
        calcular();
        return;
    }


    //Fazedo aparecer no display
    if (operacao.textContent === "0") {
        expressaoAtual = valor;
    }else {
        expressaoAtual += valor;
    }
    operacao.textContent = expressaoAtual;

    console.log(expressaoAtual, "aqui");
}


function calcular() {
    //Expressão vazia, não fazemos nada
    if (expressaoAtual === ""){
        resultado.textContent = "0";
        return;        
    }

    if (resultado > 0){
        operacao.textContent = resposta;
    }

    let operadores = ["+", "-", "*", "/", "%"];
    let operadorEncontrado = "";
    let indiceOperador = "";

    for (let indice = 0; indice < expressaoAtual.length; indice++) { // passa pela expressao
        console.log(expressaoAtual[indice]);
        let acharOperador = expressaoAtual[indice];//caracter
        if (operadores.includes(acharOperador)){//verifica se o operador esta na lista de operadores, se tiver adiocona esse operador e pega o indice
            indiceOperador = indice;
            operadorEncontrado = acharOperador;
            break;
        }
    }

    //Separando a primeira parte da segunda
    let parteEsquerda = Number(expressaoAtual.substring(0, indiceOperador));
    let parteDireita = Number(expressaoAtual.substring(indiceOperador + 1));
    console.log("parte esquerda", parteEsquerda);
    console.log("parte direita", parteDireita);
    console.log("operador", operadorEncontrado);

    //calculo    
    switch(operadorEncontrado) {
        case "+":
            resposta = parteEsquerda + parteDireita;
            resultado.textContent = resposta;
            operacao.textContent = resposta;
            expressaoAtual = resposta;
            break;
        case "-":
            resposta = parteEsquerda - parteDireita;
            resultado.textContent = resposta;
            operacao.textContent = resposta;
            expressaoAtual = resposta;
            break;
        case "*":
            resposta = parteEsquerda * parteDireita;
            resultado.textContent = resposta;
            operacao.textContent = resposta;
            expressaoAtual = resposta;
            break;
        case "/":
            resposta = parteEsquerda / parteDireita;
            resultado.textContent = resposta;
            operacao.textContent = resposta;
            expressaoAtual = resposta;
            break;
    }
}
