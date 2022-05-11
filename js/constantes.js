/* Video 33) Módulos ( import / export ) */

//Exportando la variable
export const PI = Math.PI;

export let usuario = "Jon";
let password = "qwerty";
//para exportar por default no se puede hacerse en la declaracion de una variable
//export default password;

//cuando se mande a llamar esta funcion, se va a exportar automaticamente
//solo se puede tener una sola exportacion por default
export default function saludar() {
    console.log("Hola modulos +ES6");
}

export class Saludar {

    constructor(){
        console.log("Hola Clases +ES6");
    }
}

/* Fin Video 33) Módulos ( import / export ) */