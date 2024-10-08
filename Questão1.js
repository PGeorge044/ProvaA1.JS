function calculadora(num1, num2, operacao) {
    let resultado;

    if (operacao === "soma") {
        resultado = num1 + num2;
    } else if (operacao === "subtracao") {
        resultado = num1 - num2;
    } else if (operacao === "multiplicacao") {
        resultado = num1 * num2;
    } else if (operacao === "divisao") {
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            return "Erro: Divisão por zero não é permitida.";
        }
    } else {
        return "Operação inválida.";
    }

    return resultado;
}


console.log(calculadora(10, 7, "soma")); 
console.log(calculadora(10, 9, "subtracao")); 
console.log(calculadora(10, 6, "multiplicacao")); 
console.log(calculadora(10, 5, "divisao")); 
console.log(calculadora(10, 0, "divisao"));
