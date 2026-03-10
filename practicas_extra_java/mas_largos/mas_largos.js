// Nivel 5 – Ejercicios un poco más largos
// 17.Tabla de multiplicar
// • Función tablaMultiplicar(n) que muestre en consola la tabla del n del 1 al 10
// • Ejemplo: tablaMultiplicar(4) muestra 4 x 1 = 4 … 4 x 10 = 40.


function tablaMultiplicar(n){
    for (i=1; i<=10; i++){
        let multiplicacion=i*n
        console.log(multiplicacion)
    }
}

tablaMultiplicar(8)



// 18.Contar ocurrencias en un array
// • Función contarOcurrencias(arr, valor) que devuelva cuántas veces
// aparece valor en arr.


function contarOcurrencias(arr,valor){

contador=0

    for (let i of arr){
        if (i == valor){
            contador=contador+1
        }
        else{
            continue
        }
    }
    return contador
}

array=[1,2,3,4,1,1,2,1,1]

contarOcurrencias(array, 1)
console.log(contarOcurrencias(array, 1))

// 19.Encontrar el mínimo y máximo
// • Función minMax(arr) que devuelva un objeto:
// js
// { min: ..., max: ... }
// • Hazlo con un bucle, sin Math.min(...arr).



// 20.Palíndromo sencillo
// • Función esPalindromo(texto) que devuelva true si el texto es igual leído al
// derecho y al revés (por ejemplo, "oso", "ana").

