let refDiv1 = document.querySelector(".div1");
let refParrafo1 = refDiv1.parentElement.children[0]
let refParrafo2 = refDiv1.previousElementSibling
let refLista = document.querySelector(".lista");
let ref1ParrafoDendeLista = refLista.parentElement.children[0];
let ref2ParrafoDendeLista = refLista.previousElementSibling.previousElementSibling;
let refTablaDendeLista = refLista.nextElementSibling
let refTabla = document.querySelector("table");
let refTd1sTabla = refTabla.children[0].children[1].children
let refDiv1DendeTabla = refTabla.previousElementSibling.previousElementSibling
let refDiv2DendeTabla = refTabla.parentElement.children[1]
let refTabla1DendeDiv = refDiv1.parentElement.children[3]
let refTabla2DendeDiv = refDiv1.nextElementSibling.nextElementSibling
export {
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
}