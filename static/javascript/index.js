import { 
    ref1ParrafoDendeLista,
    refLista,
    refLista2,
    refListaImaxes
 } from "./funcions/referencias.js";

/**
 * Exercicio 4
Introduce na lista anterior un evento
“click” cada vez que lle des no primeiro
elemento da lista, saca por consola:
➢ Toda a lista creada
➢ O texto dese elemento

Emprega o evento “click”.
 */

ref1ParrafoDendeLista.addEventListener("click",()=>{
    console.log("sae un ...",ref1ParrafoDendeLista.textContent)
    console.log("refLista ",refLista)
    ref1ParrafoDendeLista.textContent = "Estamos no cersia de santiago"
    ref1ParrafoDendeLista.style.backgroundColor = 'orange'
})

// Exercicio 5 - relacionado previamente
/**
 * Exercicio 6
 * UTILIZARÉ A LISTA2
Crea un elemento lista de varios
elementos ‘li’, onde deberás introducir
unha etiqueta ‘span’ con texto.

Utiliza ‘e.target’ ou ‘event.target’ para
observar sobre qué elemento estás a
clicar.
Lembra de referenciar a lista (‘ul’)
correctamente.
Emprega o evento “click”.
 */

refLista2.addEventListener("click",(event)=>{
    //console.log("event",event)// NO MOMENTO QUE CLIQUE TRAE MOITA INFORMACIÓN DO ELEMENTO CLICADO
    console.log("event.target",event.target)// ELEMENTO ONDE CLICAS, SACA A ETIQUETA CLICADA
    console.log("event.target",event.target.textContent)

    // CON REMOVE BORRAREMOS O ELEMENTO DA 
    // neste caso estamos distinguindo onde teñamos un atributo 'name' co valor 'eliminar'
    //event.target.remove()
    if(event.target.getAttribute("name") == "eliminar"){
        // TEÑO QUE SITUARME DENDE O ELEMENTO CLICADO QUE NESTE CASO É img
        // ACCEDO O PAI mediante parentElement
        // UTILIZO remove() PARA BORRAR
        event.target.parentElement.remove()
        //console.log("clico a imaxen")
    }
    if(event.target.getAttribute("name") == "guardar"){

        console.log("clico imaxen gardar")
        event.target.parentElement.contentEditable = false
    }
    if(event.target.getAttribute("name") == "editar"){

        console.log("clico imaxen editar")
         event.target.parentElement.contentEditable = true
    }
})


/**
 * Exercicio 8
Ca lista anterior:
➢ Cómo seleccionarías todas a imaxes para podelas utilizar.
➢ Cómo lle engadirías un evento a estas imaxes se che dixeran que sólo podes
    utilizar estas para xenerar a referencia ? [se non entendes este enunciado,avísame]
➢ Cando saibas cómo engadirlle o envento na imaxen:
    ○ Fai que saque por consola o texto asociado a ese ‘li’
    ○ Fai que saque por consola a referencia da lista
 */
// IMAXEN DE MANEIRA INDIVIDUAL
/*
refListaImaxes[0].addEventListener("click",()=>{
    console.log("dfasdfa")
})*/

// TODAS AS IMAXES
/*
for(let imaxe of refListaImaxes){
    imaxe.addEventListener("click",()=>{
        console.log("imaxen clicada")
        imaxe.parentElement.remove()
    })
}
*/
console.log(refListaImaxes)
