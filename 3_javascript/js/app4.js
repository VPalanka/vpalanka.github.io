//Generador de contraseñas seguras

let caracteres="abcdefghijklmnñopqrstuvwxyz"
let caracteresMayusculas="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
let caracteresNumeros="0123456789"
let caracteresEspeciales="!@#$%^&*()_+|~`-={}[]:;'<>?,./"

function numAleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let password=""

function damePass(min, max, array){
    let cuantosCaracteres=numAleatorio(min,max)
    for (let i=0; i<cuantosCaracteres; i++){
        let posicion=numAleatorio(0, array.length-1)
        password+=array[posicion]
    }
}

damePass(1,2,caracteresNumeros)
damePass(1,2, caracteresEspeciales)
damePass(1,1, caracteresMayusculas)
// darme el resto
let resto=50-password.length
damePass(1,resto,caracteres)


//desordenar array
password=password.split('').sort(() => Math.random() - 0.5).join('') 

//mostrar en pantalla
console.log(password)