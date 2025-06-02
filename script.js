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
    if (valor === "C") {
        operacaoDisplay.textContent = "0";
        resultadoDisplay.textContent = "0";
        primeiraOperacao = "";
        segundaOperacao = "";
        operador = "";
        verificarResultado = false;
        return;
    }


   if (primeiraOperacao === "" && (valor === "/" || valor === "*" || valor === "+" || valor === "%")) {
    return;
   } else if (valor === "/" || valor === "*" || valor === "+" || valor === "%" || valor === "-") {
        if (verificarResultado && (valor === "/" || valor === "*" || valor === "+" || valor === "%" || valor === "-")) {
            primeiraOperacao = resultado.toString();
            operacaoDisplay.textContent = resultado;
            operacaoDisplay.textContent += valor;
            resultadoDisplay.textContent = "0";
            operador = valor;
            verificarResultado = false;
            return;
   }
    operador = valor;
    operacaoDisplay.textContent += valor;
    return;
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
    if (primeiraOperacao !== "" && segundaOperacao !== "" && operador !== "") {
        switch (operador) {
            case "+":
                resultado = Number(primeiraOperacao) + Number(segundaOperacao);
                break;
            case "-":
                resultado = Number(primeiraOperacao) - Number(segundaOperacao);
                break;
            case "*":
                resultado = Number(primeiraOperacao) * Number(segundaOperacao);
                break;
            case "/":
                resultado = Number(primeiraOperacao) / Number(segundaOperacao);
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
