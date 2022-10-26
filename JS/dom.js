// Nodo= un nodo en el DOM es cualquier etiqueta del cuerpo, como un párrafo, el mismo body o incluso las etiquetas de una lista.
    // Document: el nodo document es el nodo raiz, de donde salen el resto de nodos.
    // Element: nodos defeinidos por etiquetas html.
    // Text: el texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text.
    // Attribute: los atributos de las etiquetas definen nodos.
    // Comentarios y otros: lso comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos HTML generan nodos.

// Document - Metodos de seleccion de elementos
    // document.getElementById() selecciona un elemento por ID
    // document.getElemetnByTagName() selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada
    // document.querySelector() devuelve el primer elemento que coincida con el grupo especificado de selectores.
    // document.querySelectorAll() devuelve todos los elementos que coincidan con el grupo especificado de selectores.

// parrafo = document.getElementsByTagName("p");
// document.write(parrafo)

// parrafo = document.querySelector(".parrafo")
// document.write(parrafo)

// Metodos para definir, obtener y eliminar valores de atributos.
    // setAttribute() modifica el valor de un atributo.
    // getAttribute() obtiene el valor de un atributo.
    // removeAttribute() remueve el valor de un atributo.


    // mofificamos el tipo del input con setAttribute("acá va lo que queremos cambiar","acá va lo que cambiamos")


// CON $0 PODEMOS VER LA LINEA DE CODIGO QUE TIENE UN ALEMENTO DESDE LA CONSOLA.
// const rangoEtario = document.querySelector(".rangoEtario");
// rangoEtario.setAttribute("type","text")

// document.write(rangoEtario.getAttribute("type"))



// setAttribute("contentEditable","true")
const titulos = document.querySelector(".titulo") //Acá estamso selccionado para que pueda ser modificado

titulos.setAttribute("contentEditable","true") //  Acá hacemos el contenEditable true para que la edicions sea posible (agregamos el setAttribute)


const dos = document.querySelector(".hola")

dos.setAttribute("contentEditable", "true")

// dir indica la direccion del texto y tiene tres valores, left to rigth(ltr)
const input = document.querySelector(".input");

input.placeholder= "hijo de re mil puta";

input.required = "required";

const h1 = document.querySelector(".ho")

h1.style.color= "red";
h1.style.padding = "30px";

h1.classList.add(".grande")

const titulo = document.querySelector(".titulo");
let resultado = titulo.textContent
document.write(resultado)