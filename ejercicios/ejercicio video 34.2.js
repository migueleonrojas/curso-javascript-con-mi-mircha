/* 
2) Programa una función que te devuelva el texto recortado según el número de 
caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". 
*/

const recortarTexto = (texto, posicionFinal) => {

    if(typeof texto === 'string'){
        return `La cadena ${texto} se convirtio a ${texto.substring(0,posicionFinal)}`;
    }

    else{
        return `${texto} no es una cadena de texto`;
    }

}

recortarTexto("Hola mundo", 4);