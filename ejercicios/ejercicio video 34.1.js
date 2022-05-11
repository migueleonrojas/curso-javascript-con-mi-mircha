/* 
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. 
miFuncion("Hola Mundo") devolverá 10.
Tambien que sea para tipos de datos como objetos, arreglos, numeros
 
*/


let cuentaCaracteres = (cadena) => {

    if(typeof cadena === 'string' ){

        return `La cadena "${cadena}" posee ${String(cadena).length} letras`;

    }

    
    else if (typeof cadena === 'object') {

        if (Array.isArray(cadena)){
            return `El array "${cadena}" posee ${cadena.length} posiciones`;
        }

        else {
            return `El objeto "${cadena}" posee ${Object.keys(cadena).length} atributos`;
        }

        

    }
     
    
}

cuentaCaracteres({});