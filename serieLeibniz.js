function Pi(aprox) {
    let pi = 0;
    let s = 1;
  
    for (let i = 0; i < aprox; i++) {
      pi += s * (1.0 / (2 * i + 1)); 
      s *= -1;
    }
    pi *= 4;
    return pi;
  }
  
  const aprox = 1000;
  const Rpi = Pi(aprox);
  console.log("La aproximacion es: "+Rpi);