/* Video 60) WEB APIs */

/* console.log(window);
console.log(document);

let texto = "ejeeee";

//identificando un boton
let botonHablar = document.querySelector(".hablar")        

//codigo de ejemplo, se le pasa un texto y habla la maquina
const hablar = (texto) => {
    const ut = new SpeechSynthesisUtterance(texto);
    speechSynthesis.speak(ut);
}

//boton que se clickea realizara lo de la funcion
botonHablar.addEventListener("click", function(){hablar(texto);}, false); */
        
/* Fin Video 60) WEB APIs */

/* Video 61. DOM: Introducción */

/* console.log("**********Elementos del Documento*************");

console.log(window.document);

console.log(document);

console.log(document.head);

console.log(document.body);

//trae el contenido de la etiqueta html
console.log(document.documentElement);

//trae el tipo de documento
console.log(document.doctype);

//acceder al juego de caracteres
console.log(document.charset);

console.log(document.title);

//obtiene lista de enlaces
console.log(document.links);

//obtiene las imagenes
console.log(document.images);

//obtiene los formularios
console.log(document.forms);

//obteniendo las hojas de estilo enlazadas al documento
console.log(document.styleSheets);

//obteniendo los scripts
console.log(document.styleSheets);

//coleccion de elementos seleccionados con el cursor
setTimeout(() => {
    console.log(document.getSelection().toString());
},3000)


//permite escribir en el documento
document.write("<h2>Hola Mundo<h2>") */


/* Fin Video 61. DOM: Introducción */

/* Video 62) DOM: Nodos, Elementos y Selectores */

//nodos no es igual a las etiquetas

/* //no se utilza
console.log(document.getElementsByTagName("li"));

//no se utilza
console.log(document.getElementsByClassName("card"));

//no se utilza
console.log(document.getElementsByName("nombre"));

console.log(document.getElementById("menu"));

console.log(document.querySelector("#menu"));

console.log(document.querySelector("a"));

console.log(document.querySelectorAll("a"));

console.log(document.querySelectorAll("a").length);

document.querySelectorAll("a").forEach((el) => console.log(el));

console.log(document.querySelector(".card"));

console.log(document.querySelectorAll(".card"));

console.log(document.querySelectorAll(".card")[2]);

console.log(document.querySelectorAll("#menu li"));

console.log(document.querySelector("#menu li")); */

/* Fin Video 62) DOM: Nodos, Elementos y Selectores */

/* Video 63) DOM: Atributos y Data-Attributes */

/* console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));//obtiene el valor del atributo

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX")
console.log(document.documentElement.lang);

//se coloca $ para diferenciar las variables que van a guardar elementos del dom
const $linkDom = document.querySelector(".link-dom");

$linkDom.setAttribute("target", "_blank");
//para evitar sea insegura la pestana o un hackeo, no hay dependencia entre la ventana que se abre
//y la ventana origen
$linkDom.setAttribute("rel", "noopener");
$linkDom.setAttribute("href", "https://www.google.com");

//consultar si posee el atributo rel
console.log($linkDom.hasAttribute("rel"));

//remover atributo
$linkDom.removeAttribute("rel");

console.log($linkDom.hasAttribute("rel"));

//data attribute
console.log($linkDom.getAttribute("data-description"));

//acceder a la coleccion de mapas de data attribute
console.log($linkDom.dataset);

//obtener un data attribute en particular
console.log($linkDom.dataset.description);

//modificando el valor de un data attribute
$linkDom.setAttribute("data-description","Modelo de Objeto del Documento");

console.log($linkDom.dataset.description);

//modificando el valor de un data attribute usando la metodologia del punto
$linkDom.dataset.description = "Suscribete";

console.log($linkDom.dataset.description);

console.log($linkDom.hasAttribute("data-id"));
console.log($linkDom.removeAttribute("data-id"));

console.log($linkDom.hasAttribute("data-id")); */

/* Fin Video 63) DOM: Atributos y Data-Attributes */

/* Video 64) DOM: Estilos y Variables CSS */

/* const $linkDom = document.querySelector(".link-dom");

console.log($linkDom.style);//solo muestra el valor de las propiedades que se definen
console.log($linkDom.getAttribute("style"));
console.log($linkDom.style.backgroundColor);
console.log($linkDom.style.color);
//nos trae las propiedades dinamicas de css, se muestran los estilos por defecto que asigna el 
//navegador
console.log(window.getComputedStyle($linkDom));

//acceder a una propiedad en especifico
console.log(getComputedStyle($linkDom).getPropertyValue("color"));

//modificando las propiedades css de un elemento
$linkDom.style.setProperty("text-decoration","none");

//modificando las propiedades css de un elemento
$linkDom.style.setProperty("display","block");
$linkDom.style.width = "50%";
$linkDom.style.textAlign = "center";
$linkDom.style.marginLeft = "auto";
$linkDom.style.padding = "1rem";
$linkDom.style.borderRadius = ".5rem";

console.log($linkDom.style);
console.log($linkDom.getAttribute("style"));
console.log(window.getComputedStyle($linkDom));


//Variables CSS - Custom Properties CSS
const $html = document.documentElement,
    $body = document.body;

//accediendo a la variable css
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

//modificar el valor de las variables css, se aplica a la etiqueta html
$html.style.setProperty("--dark-color", "#000");

//se modifica el color que se guardo en esta variable
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

//se aplica el color a travez de la variable modificada
$body.style.setProperty("background-color", varDarkColor); */


/* Fin Video 64) DOM: Estilos y Variables CSS */

/* Video 65) DOM: Clases CSS */

/* const $card = document.querySelector(".card");

console.log($card);

//nombre del atributo class
console.log($card.className);

//una lista con los valores relacionados con el atributo class
console.log($card.classList);

//evalua si contiene la clase
console.log($card.classList.contains("rotate-45"));

//agregar una clase css al elemento
$card.classList.add("rotate-45");

console.log($card.classList.contains("rotate-45"));

console.log($card.className);
console.log($card.classList);

//quitar una clase css al elemento
$card.classList.remove("rotate-45");

console.log($card.classList.contains("rotate-45"));

//si posee la clase se la quita, si no la tiene se la coloca
$card.classList.toggle("rotate-45");

console.log($card.classList.contains("rotate-45"));

$card.classList.toggle("rotate-45");

console.log($card.classList.contains("rotate-45"));

$card.classList.toggle("rotate-45");

//reemplazar una clase css por otra
$card.classList.replace("rotate-45",".rotate-135");

//agregando varias clases
$card.classList.add("opacity-80","sepia");

//removiendo varias clases
$card.classList.remove("opacity-80","sepia");

//si posee las clases se las quita, si no las tiene se las coloca
$card.classList.toggle("opacity-80","sepia");
 */


/* Fin Video 65) DOM: Clases CSS */

/* Video 66) DOM: Texto y HTML */

/* const $whatIsDOM = document.getElementById("que-es");

let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i> DOM - Document Object Model </i></b>) es un API
    para documentos HTML y XML
    </p>
    <p>
    Este proveé una representación estructural del documento, permitiendo modificar su contenido y
    presentación visual mediante código JS
    </p>
    <p>
    <mark>El DOM no es parte de la especificacion de JavaScript, es un API para los navegadores</mark>
    </p>
`;

//agrega contenido textual a un elemento no es el estandar
//$whatIsDOM.innerText = text;

//agrega contenido textual sin respetar identaciones, todo seguido
$whatIsDOM.textContent = text;

//colocar codigo html dentro del elemento
$whatIsDOM.innerHTML = text;

//remplaza el elemento html por este nuevo elemento html
$whatIsDOM.outerHTML = text; */

/* Fin Video 66) DOM: Texto y HTML */


/* Video 67) DOM Traversing: Recorriendo el DOM  */

/* const $cards = document.querySelector(".cards");

console.log($cards);

//referencia a los hijos del elemento cards
console.log($cards.children[2]);

//retorna el elemento padre
console.log($cards.parentElement);

//imprime el primer elemento hijo tanto nodo como elemento
console.log($cards.firstChild);

//solo imprime el primer elemento
console.log($cards.firstElementChild);

console.log($cards.lastChild);

console.log($cards.lastElementChild);

//retorna el elemento que esta antes
console.log($cards.previousSibling)

//retorna el elemento anterior solo html
console.log($cards.previousElementSibling)

console.log($cards.nextSibling);
console.log($cards.nextElementSibling);

//busca el padre mas cercano dependiendo del tipo de selector que le demos
console.log($cards.closest("body"));

//te indica cual es la section mas cercana al 3 elemento hijo de cards
console.log($cards.children[3].closest("section")); */



/* Fin Video 67) DOM Traversing: Recorriendo el DOM */


/* Video 68) DOM: Creando Elementos y Fragmentos */

/* //creando elementos html
const $figure = document.createElement("figure");
    $img = document.createElement("img");
    $figcaption = document.createElement("figcaption");
    $figcaptionText = document.createTextNode("Animals");//creando nodos de texto
    $cards = document.querySelector(".cards");
    $figure2 = document.createElement("figure");

$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt","Animals");
$figure.classList.add("card");//se le agrega la clase card
    
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
    <img src="https://placeimg.com/200/200/people" alt = "People">
    <figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);


const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
    $ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>")

document.body.appendChild($ul);

estaciones.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
})

const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"];
    $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML = "";

continentes.forEach((el) => {$ul2.innerHTML += `<li>${el}</li>`});

//fragmentos, es un fragmento que se utiliza para agregarles todos los elementos a este y al final
//solo agregar el fragmento al dom
const meses = [
    "Enero",
    "Febreo",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];

    $ul3 = document.createElement("ul");
    $fragment = document.createDocumentFragment();

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3>Meses del Anio</h3>");

$ul3.appendChild($fragment);
document.body.appendChild($ul3); */ 

/* Fin Video 68) DOM: Creando Elementos y Fragmentos */

/* Video 69) DOM: Templates HTML */

/* const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment();
    cardContent = [
        {
            title: "Tecnologia",
            img: "https://placeimg.com/200/200/tech",
        },
        {
            title: "Animales",
            img: "https://placeimg.com/200/200/animals",
        },
        {
            title: "Arquitectura",
            img: "https://placeimg.com/200/200/arch",
        },
        {
            title: "Gente",
            img: "https://placeimg.com/200/200/people",
        },
        {
            title: "Naturaleza",
            img: "https://placeimg.com/200/200/nature",
        },

    ];

    cardContent.forEach(el => {
        $template.querySelector("img").setAttribute("src", el.img);
        $template.querySelector("img").setAttribute("alt", el.title);
        $template.querySelector("figcaption").textContent = el.title;

        //se clona el template, true para tambier clonar su contenido
        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
    });

    $cards.appendChild($fragment); */

/* Fin Video 69) DOM: Templates HTML */

/* Video 70) DOM: Modificando Elementos (Old Style) */

/* const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");
    $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt ="any">
<figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[2]);

//$cards.insertBefore($newCard, $cards.firstElementChild);

//$cards.removeChild($cards.lastElementChild);

document.body.appendChild($cloneCards); */


/* Fin Video 70) DOM: Modificando Elementos (Old Style) */


/* Video 71) DOM: Modificando Elementos (Cool Style) */

/* //.insertAdjacent
//  .insertAdjacentElement(posicion,el)
//  .insertAdjacent(posicion,html)
//  .insertAdjacent(posicion,text)
//
//Posiciones
//  beforebegin(hermano anterior)
//  afterbegin(primer hijo)
//  beforeend(ultimo hijo)
//  afterend(hermano siguiente)

const $cards = document.querySelector(".cards");
    $newCard = document.createElement("figure");
    

let $contentCard = `
<img src="https://placeimg.com/200/200/any" alt="any"/>
<figcaption></figcaption>
`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend",$contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any")
//$cards.insertAdjacentElement("afterbegin",$newCard);

//$cards.prepend($newCard);
//$cards.before($newCard);
//$cards.append($newCard);
//$cards.after($newCard); */

/* Fin Video 71) DOM: Modificando Elementos (Cool Style) */

/* Video 72) DOM: Manejadores de Eventos */

/* function holaMundo(){
    alert('Hola Mundo');

    console.log(event);
}


const $eventoSemantico = document.getElementById("evento-semantico");
    $eventoMultiple = document.getElementById("evento-multiple");

//evento con manejador semantico
$eventoSemantico.onclick = holaMundo;

$eventoSemantico.onclick = function (e) {
    alert("Hola mundo manejador de eventos semantico");
    console.log(e);
    console.log(event);

}

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
    alert('Manejador de eventos multiples');
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
}); */

/* Fin Video 72) DOM: Manejadores de Eventos */

/* Video 73) DOM: Eventos con Parámetros y Remover Eventos */

/* function holaMundo(){
    alert('Hola Mundo');

    console.log(event);
}

//funcion creada en este video 73
function saludar(nombre = "Desconocid@") {
    alert(`Hola ${nombre}`);
    console.log(`${event}`);
}


const $eventoSemantico = document.getElementById("evento-semantico");
    $eventoMultiple = document.getElementById("evento-multiple");
    $eventoRemover = document.getElementById("evento-remover");

//evento con manejador semantico
$eventoSemantico.onclick = holaMundo;

$eventoSemantico.onclick = function (e) {
    alert("Hola mundo manejador de eventos semantico");
    console.log(e);
    console.log(event);

}

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
    alert('Manejador de eventos multiples');
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
});


//para ejecutar una funcion que acepte parametros la cual se ejecuta en un evento
$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("Jon")
});

const removerDobleClick = (e) => {

    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    //removiendo eventos
    $eventoRemover.removeEventListener("dblclick",removerDobleClick);
    $eventoRemover.disabled = true;

}

$eventoRemover.addEventListener("dblclick", removerDobleClick); */




/* Fin Video 73) DOM: Eventos con Parámetros y Remover Eventos */


/* Video 74) DOM: Flujo de Eventos (Burbuja y Captura) */

/* const $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e){

    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);

}

console.log($divsEventos);

$divsEventos.forEach(div => {

    //fase de burbuja
    //div.addEventListener("click", flujoEventos);
    //div.addEventListener("click", flujoEventos, false);
    
    
    //fase de captura
    div.addEventListener("click", flujoEventos, true);
    div.addEventListener("click", flujoEventos, {
        capture:true,//coloca fase captura
        once: true//para que solo se ejecute el evento una vez
    });
}); */

/* Fin Video 74) DOM: Flujo de Eventos (Burbuja y Captura) */

/* Video 75) DOM: stopPropagation & preventDefault */

/* const $divsEventos = document.querySelectorAll(".eventos-flujo div");
    $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e){

    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);

    //detiene la propagacion de la ejecucion de las funciones por propagacion
    e.stopPropagation();
}

console.log($divsEventos);

$divsEventos.forEach(div => {

    //fase de burbuja
    div.addEventListener("click", flujoEventos);
    //div.addEventListener("click", flujoEventos, false);
    
    
    //fase de captura
    //div.addEventListener("click", flujoEventos, true);
    //div.addEventListener("click", flujoEventos, {
    //    capture:true,//coloca fase captura
    //   once: true//para que solo se ejecute el evento una vez
    //});


});

$linkEventos.addEventListener("click", e => {


    alert("Hola soy tu amigo y docente digital");

    //cancela la accion que tenga por defecto el elemento html
    e.preventDefault();

    e.stopPropagation();
}); */

/* Fin Video 75) DOM: stopPropagation & preventDefault */

/* Video 76) DOM: Delegación de Eventos */



/* function flujoEventos(e){

    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);

}

//delegacion de los eventos al nodo raiz
document.addEventListener("click", (e) => {

    console.log("Click en", e.target);

    //si se selecciona el elemento se ejecuta la funcionalidad especificada
    if(e.target.matches(".eventos-flujo a")){
        
        alert("Hola soy tu amigo y docente digital");
        e.preventDefault();
    }

    if(e.target.matches(".eventos-flujo div")){

        flujoEventos(e); 

    }

});

//$divsEventos.forEach(div => {

//    div.addEventListener("click", flujoEventos);

//});
 */


/* Fin Video 76) DOM: Delegación de Eventos */

/* Video 77) BOM: Propiedades y Eventos */

/* window.addEventListener("resize", e => {

    console.clear();
    console.log("**********Evento Resize*************");
    console.log(window.innerWidth);//tamano del viewport
    console.log(window.innerHeight);
    console.log(window.outerHeight);//tamano del navegador
    console.log(window.outerWidth);
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});

window.addEventListener("scroll", e => {
    console.clear();
    console.log("**********Evento Scroll*************");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});

window.addEventListener("load", e => {

    
    console.log("**********Evento Load*************");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);

});

//evento mas rapido para ejecutar una funcion al cargar el document
document.addEventListener("DOMContentLoaded", e => {

    
    console.log("**********Evento DOMContentLoaded*************");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);

}); */




/* Fin Video 77) BOM: Propiedades y Eventos */

/* Video 78) BOM: Métodos */

//window.alert("Alerta");
//window.confirm("Confirmacion");
//window.prompt("Aviso");

const $btnAbrir = document.getElementById("abrir-ventana");
    $btnCerrar = document.getElementById("cerrar-ventana");
    $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", e => {

    //abrir una ventana
    ventana = window.open("https://jonmircha.com");

});

$btnCerrar.addEventListener("click", e => {

    //window.close()
    ventana.close();
    
});

$btnImprimir.addEventListener("click", e => {
    
    window.print();

});


/* Fin Video 78) BOM: Métodos */

/* Video 79) BOM: Objetos: URL, Historial y Navegador */

//console.log('***********Objeto URL (location)******************');
//console.log(location);
//console.log(location.origin);
//console.log(location.protocol);
//console.log(location.host);
//console.log(location.hostname);
//console.log(location.port);
//console.log(location.href);
//console.log(location.hash);
//console.log(location.search);
//console.log(location.pathname);
//location.reload();


console.log('************Objeto Historial (history)****************');
console.log(history);
console.log(history.length);

//cuantas paginas quieres ir hacia atras
//history.back(3);

//cuantas paginas quieres ir hacia adelante
//history.forward(2);

//para avanzar o regresar paginas, -2 para regresar, 2 para adelantar
//history.go(-2);

/* Fin Video 79) BOM: Objetos: URL, Historial y Navegador */


console.log('************Objeto Navegador (navigator)****************');
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);
