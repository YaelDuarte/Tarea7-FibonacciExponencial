function fibonacci(num) {
    let act = 0;
    let sig = 1;
    const resultado = [];

    for (let i = 0; i < num; i++) {
        const res = act + sig;
        act = sig;
        sig = res;
        resultado.push(res);
    }

    return resultado;
}

const num = 10; // Cuantas veces se va a ejecutar la suma
const res = fibonacci(num);
console.log(res);