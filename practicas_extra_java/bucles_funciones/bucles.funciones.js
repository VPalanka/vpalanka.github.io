// 13.Función sumaHasta(n)
// • Recibe un número n.
// • Usa un bucle dentro de la función para devolver la suma del 1 a n.

function sumaHasta(n){
    let contador=0

    for (let i=0; i<=n; i++){
        contador=contador+i
    }

    return contador
}

let resultado=sumaHasta(10)
console.log(resultado)

// 14.Función contarMayoresQue(arr, x)
// • Recibe un array de números y un número x.
// • Devuelve cuántos elementos son mayores que x.

contador=0

function contarMayoresQue(arr,x){
    for (i of arr){
        if (i > x){
            contador=contador+1
        }
    }

    return contador
}

let numeros=[1,2,3,4,5]
let resultado= contarMayoresQue(numeros, 2)
console.log(resultado)


// 15.Función invertirTexto(texto)
// • Sin usar métodos raros, recorre el string desde el final al inicio y construye el texto
// invertido.
// • Ejemplo: "hola" → "aloh".

function invertirTexto(texto) {
    let nuevotexto = "";          // Inicializamos el texto invertido
    for (let i = texto.length - 1; i >= 0; i--) {
        nuevotexto += texto[i];   // Añadimos cada carácter desde el final
    }
    return nuevotexto;
}

console.log(invertirTexto("hola"));       
console.log(invertirTexto("Javascript")); 

// 16.Función filtrarPares(arr)
// • Recibe un array de números.
// • Devuelve un nuevo array con solo los números pares (usando bucle, no .filter)

function filtrarPares(arr){
    for (i of arr){
        if(i%2 == 0){
            pares.push(i)
        }
    }
}

numeros=[1,2,3,4,5,6,7,8]
pares=[]

filtrarPares(numeros)
console.log(pares)