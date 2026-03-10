// 5. Recorrer un array de nombres
// • Crea un array con 5 nombres.
// • Recorre el array con un for normal, luego con for...of, imprimiendo cada nombre.

let nombres=["Maria", "Julia", "Paula", "Monica", "Petunia"]

// for (i=0; i<=nombres.length; i++){
//     console.log (nombres[i])
// }

// for (i of nombres){
//     console.log (i)
// }



// 6. Contar elementos mayores que X
// • Crea un array de números.
// • Pide un número X y cuenta cuántos elementos del array son mayores que X.

// numeros=[1,2,3,4,5,6,7,8]

// let respuesta = prompt("Dime un número del 1 al 8 ")

// contador=0

// for (i of numeros){
//     if (i>respuesta){
//         contador=contador+1
//     }
// }

// console.log(contador)

// 7. Longitud total de palabras
// • Crea un array de palabras.
// • Recorre el array y suma la longitud de todas las palabras.
// • Muestra la suma total de caracteres.

// let palabras=["pato", "león", "foca", "colibrí"]

// let contador=0

// for (i of palabras){
//    contador=contador+i.length
// }

// console.log(contador)

// 8. Contar vocales en un texto
// • Ten una cadena, por ejemplo "Javascript es genial".
// • Recorre el string con un bucle y cuenta cuántas vocales tiene.

// vocales=["a","e","i","o","u"]
// let texto="Javascript es genial"

// let i=0
// let suma=0

// while (i<texto.length){
//     if (vocales.indexOf(texto[i]) !== -1 ){
//         suma=suma+1
//     }
// i++
// }
// console.log(suma)