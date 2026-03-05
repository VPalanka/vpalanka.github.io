//Cifrado CESAR

let letras="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
let frase='adios'
let paso=3

nuevafrase=""
for (i=0;i<frase.length;i++){
    //Devuelve la posición del array en la que está la letra de la frase y se suma al paso
        //letras.indexOf(a)= Devuelve la posición (el número) donde está la a en el array y -1 si no está
        //frase[0]= saca la primera letra
    let posicion=letras.indexOf(frase[i]) + paso
    //La nueva posición se busca en el abecedario para encontrar la nueva letra
    nuevaletra=letras[posicion]
    //Se añade la nueva letra a la variable vacía para ir formando la frase con el bucle
    nuevafrase=nuevafrase+nuevaletra
}

console.log(frase + " ahora es: " + nuevafrase)