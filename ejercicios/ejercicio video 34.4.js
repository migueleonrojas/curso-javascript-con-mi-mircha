/* 
    4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
    devolverá Hola Mundo Hola Mundo Hola Mundo. 
*/


const repetirTexto = (texto, repeticiones) => {

    let textoRepetido = "";

    for(let i = 0; i < repeticiones; i++){

        textoRepetido += `${texto} `;
    }

    return textoRepetido;

}

repetirTexto("zonzo", 4)