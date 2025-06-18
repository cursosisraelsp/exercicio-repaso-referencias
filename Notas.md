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

```html
    <ul class="lista2">
        <li>
          Item 1
          <span>texto dentro do span 1</span>
          <img name="eliminar" src="./imaxes/eliminar-50.png"/>
        </li>
        <li>Item 2<span>texto dentro do span 2</span><img name="eliminar" src="./imaxes/eliminar-50.png"/></li>
        <li>Item 3<span>texto dentro do span 3</span><img name="eliminar" src="./imaxes/eliminar-50.png"/></li>
        <li>Item <span>texto dentro do span 4</span><img name="eliminar" src="./imaxes/eliminar-50.png"/></li>
        <li>Item 5<span>texto dentro do span 5</span><img name="eliminar" src="./imaxes/eliminar-50.png"/></li>
        <li>Item 6<span>texto dentro do span 6</span><img name="eliminar" src="./imaxes/eliminar-50.png"/></li>
    </ul>s
```


   

