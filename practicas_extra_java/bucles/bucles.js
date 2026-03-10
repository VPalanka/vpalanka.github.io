// 1. Números del 1 al 10
// • Usa un for para mostrar en consola los números del 1 al 10.
// • Luego haz lo mismo con while.
let i=1
while (i<=10){
    console.log(i)
    i++
}

// 2. Números pares del 1 al 20
// • Con un for, muestra solo los pares entre 1 y 20.
// • Pista: usa if (i % 2 === 0).
for (i=1; i<=20; i++){
    if(i%2 === 0){
        console.log(i)
    }
}

// 3. Suma del 1 al 100
// • Recorre los números del 1 al 100 y calcula su suma total.
// • Muestra el resultado final en consola.

let acumulador=0

for (i=1; i<=100; i++){
    acumulador=acumulador+i
}

console.log(`La suma total es: ${acumulador}`)


// 4. Cuenta atrás
// • Pide un número n (puede ser con prompt o fijo en código) y muestra una cuenta
// atrás desde n hasta 0.

let numero=prompt("Dame un número")

while (numero>=0){
    console.log(numero)
    numero--
}

