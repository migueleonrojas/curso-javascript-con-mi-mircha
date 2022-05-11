/* 
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto 
caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. 
*/

const separadorEnPalabras = (texto, separador) => {

    return texto.split(separador);
}

separadorEnPalabras("hola ramon bolivar", " ");