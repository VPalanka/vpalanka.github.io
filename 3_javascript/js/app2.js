// La primitiva

function dameNumeros(max){
    let num=Math.floor(Math.random() * max) + 1
    return num
}

// let veces=1
let numeros=[]
let aqui=document.getElementById("solucion")

while(numeros.length<6){
    //si utilizamos veces se pondría veces<=6 con un for
    let variable=dameNumeros(49)
    if(numeros.indexOf(variable)>-1){
    }
    else numeros.push(variable)
}

console.log(numeros)
aqui.innerHTML=numeros

