// 9. Función saludar(nombre)
// • Crea una función que reciba un nombre y devuelva "Hola, <nombre>".
// • Pruébala con varios nombres.

function saludar(nombre){
    console.log("Hola "+ nombre)
}

saludar("David")

// 10.Función esPar(numero)
// • Devuelve true si el número es par y false si es impar.
// • Úsala dentro de un bucle del 1 al 20 para mostrar solo los pares.


function esPar(numero) {
  return numero % 2 === 0;  // esto equivale a TRUE
}

for (let i = 1; i <= 20; i++) {
  if (esPar(i)) {
    console.log(i);
  }
}


// 11.Función sumar(a, b)
// • Devuelve la suma de dos números.
// • Llama a la función varias veces y muestra los resultados.

function sumar(a,b){
    let suma=a+b
    console.log(suma)
}

sumar (2,8)


// 12.Función maximoDeTres(a, b, c)
// • Devuelve el mayor de tres números.
// • Pruébala con distintos valores.

function maximoDeTres(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

// ó

function maximoDeTres(a, b, c) {
  let numeros = [a, b, c];
  let max = numeros[0]; // asumimos que el primero es el mayor

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > max) {
      max = numeros[i]; // encontramos un número más grande
    }
  }

  return max;
}

