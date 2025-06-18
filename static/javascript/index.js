import { 
    ref1ParrafoDendeLista,
    refLista
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
})

