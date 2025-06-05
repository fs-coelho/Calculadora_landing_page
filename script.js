let operacaoDisplay = document.querySelector(".operacao");
operacaoDisplay.textContent = "0";

let resultadoDisplay = document.querySelector(".resultado");
resultadoDisplay.textContent = "0";

let primeiraOperacao = "";

let segundaOperacao = "";

let operador = "";

let resultado;

let verificarResultado = false;





function apertou (valor) {
    // Limpar ------------------------------------------------------------------------------------------------------------------------------
    if (valor === "C") {
        operacaoDisplay.textContent = "0";
        resultadoDisplay.textContent = "0";
        primeiraOperacao = "";
        segundaOperacao = "";
        operador = "";
        verificarResultado = false;
        return;
    }

    if (valor === "CE"){
        if (operacaoDisplay.textContent.length <= 1) {
            primeiraOperacao = "";
            operacaoDisplay.textContent = "0";
            return;
        } else if (operador === "") {
            primeiraOperacao = primeiraOperacao.slice(0,-1);
            operacaoDisplay.textContent = operacaoDisplay.textContent.slice(0,-1);
            return;
        } else if ( primeiraOperacao !== "" && operador !== "" && segundaOperacao === "") {
            operador = "";
            operacaoDisplay.textContent = operacaoDisplay.textContent.slice(0,-1);
            return;
        } else {
            segundaOperacao = segundaOperacao.slice(0,-1);
            operacaoDisplay.textContent = operacaoDisplay.textContent.slice(0,-1);
            return;
        }
    }
    // Limpar ------------------------------------------------------------------------------------------------------------------------------



   if (primeiraOperacao === "" && (valor === "/" || valor === "*" || valor === "+" || valor === "%" || valor === '+/-')) {
    return;
   } else if(valor === "+/-") {
    let novoResultado = ((-1) * Number(resultadoDisplay.textContent)).toString();
    resultadoDisplay.textContent = novoResultado;
    primeiraOperacao = novoResultado;
    operacaoDisplay.textContent = novoResultado;
    console.log(primeiraOperacao);
    return
   }
   
   else if (valor === "/" || valor === "*" || valor === "+" || valor === "%" || valor === "-") {
        if (operador !== "" ) {
            calcular();
        }

        if (operacaoDisplay.textContent === "0" && valor === "-") {
                operacaoDisplay.textContent = valor;
                primeiraOperacao = valor;
                return;
            }

        if (verificarResultado && (valor === "/" || valor === "*" || valor === "+" || valor === "%" || valor === "-")) {
            primeiraOperacao = resultado.toString();
            operacaoDisplay.textContent = resultado;
            operacaoDisplay.textContent += valor;
            resultadoDisplay.textContent = resultado;
            operador = valor;
            verificarResultado = false;
            return;
   } else {
    operador = valor;
    operacaoDisplay.textContent += valor;
    return;
   }
    
   } else if (operador === "" && operacaoDisplay.textContent === "0") {
    operacaoDisplay.textContent = valor;
    primeiraOperacao = valor;
    return;
   } else if (operador === "") {
    operacaoDisplay.textContent += valor;
    primeiraOperacao += valor;
    return;
   } else if (operador !== "" && (valor === "/" || valor === "*" || valor === "+" || valor === "%" || valor === "-")) {
    return;
   } else if (operador !== "") {
    operacaoDisplay.textContent += valor;
    segundaOperacao += valor;
    return;
   }  
}


function calcular() {

    if (primeiraOperacao !== "" && segundaOperacao === "") {
        resultadoDisplay.textContent = primeiraOperacao;
        return;
    }


    if (primeiraOperacao !== "" && segundaOperacao !== "" && operador !== "") {
        switch (operador) {
            case "+":
                resultado = Number(primeiraOperacao) + Number(segundaOperacao);
                if (resultado % 1 !== 0) {
                    resultado = resultado.toFixed(2)
                }
                break;
            case "-":
                resultado = Number(primeiraOperacao) - Number(segundaOperacao);
                if (resultado % 1 !== 0) {
                    resultado = resultado.toFixed(2)
                }
                break;
            case "*":
                resultado = Number(primeiraOperacao) * Number(segundaOperacao);
                if (resultado % 1 !== 0) {
                    resultado = resultado.toFixed(2)
                }
                break;
            case "/":
                resultado = Number(primeiraOperacao) / Number(segundaOperacao);
                if (resultado % 1 !== 0) {
                    resultado = resultado.toFixed(2)
                }
                break;
            default:
                resultado = "Erro";
        }
    }

    

    resultadoDisplay.textContent = resultado;
    primeiraOperacao = resultado.toString();
    segundaOperacao = "";
    operador = "";
    verificarResultado = true;

}
