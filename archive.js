function esPerfecto(X) {
    let sumaDivisores = 0;
    for (let i = 1; i < X; i++) {
      if (X % i === 0) {
        sumaDivisores += i;
      }
    }
    if (sumaDivisores === X) {
      return X + " es perfecto";
    } else {
      return X + " no es perfecto";
    }
  }
  
  function main() {
    const N = parseInt(prompt("Ingrese el número de casos de prueba (N):"));
    for (let i = 0; i < N; i++) {
      const X = parseInt(prompt(`Caso de prueba ${i + 1}: Ingrese un número entero X:`));
      const resultado = esPerfecto(X);
      alert(resultado);
    }
  }
  
  main();
