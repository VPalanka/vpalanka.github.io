//Generador de contraseñas seguras

let caracteres="abcdefghijklmnñopqrstuvwxyz"
let caracteresMayusculas="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
let caracteresNumeros="0123456789"
let caracteresEspeciales="!@#$%^&*()_+|~`-={}[]:;'<>?,./"

function numAleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let password=""

for (i=0;i<50;i++){
let num=caracteresNumeros[numAleatorio(0,9)]
let letraEspecial=caracteresEspeciales[numAleatorio(0,30)]
let letras=caracteres[numAleatorio(0,26)]
let letrasMayus=caracteresMayusculas[numAleatorio(0,26)]
password=num+letraEspecial+letras+letrasMayus
}

//desordenar array
password=password.split('').sort(() => Math.random() - 0.5).join('')   

console.log(password)