//variables
let botonAnyadir=document.getElementById("botonAnyadir")
let panel=document.getElementById("panel")
let nombre=document.getElementById("nombre")
let resuelve=document.getElementById("botonRepartir")
let amigos= []


//funciones
function render(){
    console.log(amigos)
    panel.innerHTML=""
    amigos.forEach ((amigo) => {
        console.log(amigo)
        panel.innerHTML+= amigo+ `<input type='button' value='Borrar' id='botonBorrar' data-id='${amigo}'>` + "<br>"
    })
}

function borraAmigo(nombre){
    let indice= amigos.indexOf(nombre)
    amigos.splice(indice, 1)
    render()
}

//function reparto(){
//    let companyeros=amigos.slice()
    //let i=0

    //while(i<amigos.length){
    //    let numero=Math.floor(Math.random()*amigos.length)
    //    let elegido=companyeros[numero]

    //        if (elegido == amigos[i]){
    //        }
    //        else{
    //            console.log(`A ${companyeros[i]} le ha tocado ${elegido}`)
    //            companyeros.splice(i,1)
    //            amigos.splice (i,1)
    //            i++  
    //        }
 //   }      


 function reparto(){
    
 }


//eventos
botonAnyadir.addEventListener("click", (e)=> {
    e.preventDefault()
    amigos.push(nombre.value)
    render()
})

botonRepartir.addEventListener("click", (e) =>{
    e.preventDefault()
    reparto()
})

panel.addEventListener("click", (e) =>{
    // Con e.target.dataset.id busca en el botón (en panel) del HTML y encuentra,
    // por ejemplo, que se relaciona con amigo="Pedro". 
    // Ese valor se guarda en la variable local "nombre" que he definido con let.
    let nombre=e.target.dataset.id
    // Al escribir esto, le decimos a javascript que salte a la funcion borraAmigo. 
    // y que se lleve el valor ('Pedro') consigo.
    borraAmigo(nombre)
})





// EXTRA

// Para que no se repitan los amigos en el array
    //let amigos = new Set()

// Para copiar los valores de amigos en clientes sin modificar el original podemos hacer
    // 1: let clientes= [...amigos]
    // 2: let clientes= amigos.slice() --> Si no le digo a nada me lo copia de inicio a fin








