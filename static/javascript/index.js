import {
    refParrafo1,
    refDiv1 ,
    refLista,
    refBoton
} from "./funcions/referencias.js";

console.log(refParrafo1);
console.log(refParrafo1.innerHTML);
console.log(refParrafo1.textContent);
console.log(refDiv1);
console.log(refDiv1.innerHTML);
console.log(refDiv1.textContent);
console.log(refLista);
console.log(refLista.children)
console.log(refLista.children[0])
console.log(refLista.children[0].textContent)

refBoton.addEventListener("click", function(){
    console.log(refLista);
})