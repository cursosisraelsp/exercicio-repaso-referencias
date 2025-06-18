# Asociando ideas 

## Event target
- O tema de borrar, tiñamos que realizalo mediante :
    - A referencia
    - A navegación entre etiquetas, mediante `parentElement`
    - Mediante a función remove(), asociando esta á dita referencia. Exemplo:
    ```javascript 
    // REFERENCIA DA IMAXEN, NO PAI
    event.target.parentElement.remove();
    ```
    - Para detectar que me está clicando a etiqueta de imaxen, podemos filtrala, para iso utilizamos un `if` . Onde na etiqueta `img` introducimos un atributo `eliminar` (neste caso):

    ```javascript
    if(event.target.getAttribute("name") == "eliminar"){
            event.target.parentElement.remove()
    }
    ```


> Temos que ter en conta que realizamos un evento. Cando se clica na lista ou nun elemento interno `li`, procederase á eliminación do `pai`.


   

