function fibonacci(num) {
    if (num <= 0) {
      return 0;
    } else if (num === 1) {
      return 1;
    } else {
      return fibonacci(num - 1) + fibonacci(num - 2);
    }
  }
  
  const undFibo = fibonacci(11);
  console.log("El undécimo número es:", undFibo);