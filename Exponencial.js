function calcularFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * calcularFactorial(num - 1);
    }
}

const num = 5; // Número al cual se le calculara el factorial
const fac = calcularFactorial(num);
console.log("El factorial de "+num+ " es: " +fac);