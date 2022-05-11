const d = document;
let x = 0, 
    y = 0;

export function moveBall(e, ball, stage){
   
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),//detecta la colision de este elemento con otro
        limitsStage = $stage.getBoundingClientRect(); 

    switch(e.keyCode){
        
        case 37:
            
            if(limitsBall.left > limitsStage.left){
                x--;
                e.preventDefault();
            }
        break;

        
        case 38:
            
            if(limitsBall.top > limitsStage.top){
                y--;
                e.preventDefault();
            };
        break;

        case 39:
            
            if(limitsBall.right < limitsStage.right){
                x++;
                e.preventDefault();
            }
        break;

        case 40:
            
            if(limitsBall.bottom < limitsStage.bottom){
                y++;
                e.preventDefault();
            }
        break;

        default:
        break; 
    }

    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`
    
}

export function shortcuts(e){
    

    if(e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta con el teclado");
    }

    if(e.key === "c" && e.altKey){
        confirm("Haz lanzado una confirmacion con el teclado");
    }

    if(e.key === "p" && e.altKey){
        prompt("Haz lanzado un aviso con el teclado");
    }
    
}