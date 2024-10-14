function multiplicar(num1: number, num2: number): number {
    return num1 * num2;
}

function saudar(nome: string): string {
    return "Olá " + nome;
}

const resultadoMultiplicacao = multiplicar(5, 3);
const mensagemSaudacao = saudar("Gabriel");

console.log(resultadoMultiplicacao);
console.log(mensagemSaudacao);
