export default function shortcutKeyword(){

    const d = document;

    let combinacion = [];

    d.addEventListener("keydown", (e) => {

        if(e.key === "a" && e.altKey){
            alert("Haz lanzado una alerta con el teclado");
        }
    
        if(e.key === "c" && e.altKey){
            confirm("Haz lanzado una confirmacion con el teclado");
        }
    
        if(e.key === "p" && e.altKey){
            prompt("Haz lanzado un aviso con el teclado");
        }
        
    });
}