import {
    refParrafo1,
    refParrafo2,
    refLista,
    ref1ParrafoDendeLista,
    ref2ParrafoDendeLista,
    refTablaDendeLista,
    refTd1sTabla,
    refDiv1DendeTabla,
    refDiv2DendeTabla,
    refTabla1DendeDiv,
    refTabla2DendeDiv
} from "./funcions/referencias.js";
// EXER1 - referencia o párrafo dende o div
/**
 * A partir da referencia creada no ‘div’, qué ‘propiedade’ ou ‘función’ utilizarías para
acceder a etiqueta ‘p’?. Mostra o contido por consola cando a localizes.
 */
//console.log("refDiv1.parentElement.children[0] O párrafo é o seguinte:",refParrafo1)
//console.log("refDiv1.previousElementSibling O párrafo é o seguinte:",refParrafo2)

// EXER2
/**
 * A partir da referencia creada na lista a ‘ul’, qué ‘propiedade’ ou función utilizarías
para acceder as diferentes etiquetas filla? . Mostra por consola ditos contidos.
 */

//console.log(refLista.children)
//console.log(refLista.children[0])
//console.log(refLista.children[0].textContent)

// EXER3
/**
 * 	A partir da referencia creada na lista a ‘ul’,
 *  qué ‘propiedade’ ou función utilizarías para acceder a etiqueta ‘p’? . 
 *  Mostra por consola o contido.
 */

//## Opcion 1
//console.log(ref1ParrafoDendeLista.textContent,ref1ParrafoDendeLista)
//## Opcion 2
//console.log(ref2ParrafoDendeLista.textContent,ref2ParrafoDendeLista)

// EXER4
/**
 * A partir da referencia creada na lista a ‘ul’, qué ‘propiedade’ ou función utilizarías
para acceder a etiqueta ‘table’? . Mostra por consola o contido.
Unha vez, que accedas, cómo accederías a algunha das súas etiquetas ‘td’?
 */

//console.log(refTablaDendeLista)// acceso a etiqueta table
//console.log(refTd1sTabla)

// EXER5
/**
 * A partir da referencia creada na etiqueta tabla,
 * cómo accederías a etiqueta ‘div’?.
 * Mostra por consola o ser contido
 */
//console.log(refDiv1DendeTabla)
//console.log(refDiv2DendeTabla)

// EXER6 -- o omito realizar , xa que previamente xa o realizamos
/**
 * A partir da referencia creada na etiqueta tabla, 
 * cómo accederías as diferentes etiquetas ‘td’?. 
 * Mostra por consola o ser contido.
 */

// EXER7
/**
 * A partir da referencia creada no ‘div’, 
 * qué ‘propiedade’ ou ‘función’ utilizarías para acceder a etiqueta ‘table’?. 
 * Mostra o contido por consola cando a localizes.
 */

console.log(refTabla1DendeDiv)
console.log(refTabla2DendeDiv)