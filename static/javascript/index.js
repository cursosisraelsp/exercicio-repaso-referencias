import {
    refParrafo1,
    refDiv1 ,
    refLista,
    refBoton,
    refTabla,
    refTablaTr,
    refTablaTrTodos,
    refTablaTh,
    refBody1,
    refBody2
} from "./funcions/referencias.js";
// PARRAFO
console.log(refParrafo1);
console.log(refParrafo1.innerHTML);
console.log(refParrafo1.textContent);
console.log(refDiv1);
console.log(refDiv1.innerHTML);
console.log(refDiv1.textContent);
// LISTA
console.log(refLista);
console.log(refLista.children)
console.log(refLista.children[0])// ATRAPAMOS O PRIMEIRO ELEMENTO DA LISTA
console.log(refLista.children[0].textContent)
// TABLA 
console.log(refTabla);
// o tr
console.log(refTablaTr);
// todos os tr
console.log(refTablaTrTodos);
// un th
console.log(refTablaTh);

// BODY
console.log(refBody1);
console.log(refBody2);

/// EVENTOS
refBoton.addEventListener("click", function(){
    console.log(refLista);
})