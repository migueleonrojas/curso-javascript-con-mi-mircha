export default function movingDot(background_section, bigDot){

    const d = document;
    
    let leftDot = parseInt(window.getComputedStyle(d.querySelector(bigDot))
        .getPropertyValue('left'));

    let rightDot = parseInt(window.getComputedStyle(d.querySelector(bigDot))
            .getPropertyValue('right'));

    let topDot = parseInt(window.getComputedStyle(d.querySelector(bigDot))
        .getPropertyValue('top'));

    let bottomDot = parseInt(window.getComputedStyle(d.querySelector(bigDot))
        .getPropertyValue('bottom'));
    
    let widthDot = parseInt(window.getComputedStyle(d.querySelector(bigDot))
        .getPropertyValue('width').replace("px",""));

    let heightDot = parseInt(window.getComputedStyle(d.querySelector(bigDot))
        .getPropertyValue('height').replace("px",""));

    const detectArrow = (ev) => {

        if(ev.key === "ArrowUp"   || ev.key === "ArrowDown" ||  
           ev.key === "ArrowLeft" || ev.key === "ArrowRight"){

            ev.preventDefault();

            if(ev.key === "ArrowUp"){
                topDot -= 5;
                bottomDot -= 5;
                d.querySelector(bigDot).style.setProperty('top', `${topDot}px`);
                d.querySelector(bigDot).style.setProperty('bottom', `${bottomDot}px`);
            }

            else if(ev.key === "ArrowDown"){
                topDot += 5;
                bottomDot += 5;
                d.querySelector(bigDot).style.setProperty('top', `${topDot}px`);
                d.querySelector(bigDot).style.setProperty('bottom', `${bottomDot}px`);
            }

            else if(ev.key === "ArrowLeft"){
                leftDot -= 5;
                rightDot -= 5;
                d.querySelector(bigDot).style.setProperty('left', `${leftDot}px`); 
                d.querySelector(bigDot).style.setProperty('right', `${rightDot}px`);
            }

            else if(ev.key === "ArrowRight"){
                leftDot += 5;
                rightDot += 5;
                d.querySelector(bigDot).style.setProperty('left', `${leftDot}px`); 
                d.querySelector(bigDot).style.setProperty('right', `${rightDot}px`);
            }
            

            if( `${leftDot + (widthDot/2)}`   > parseInt(window.getComputedStyle(d.querySelector(background_section)).getPropertyValue('width').replace("px","")) || 
                `${rightDot + (heightDot/2)}` < 0 ||
                `${bottomDot + heightDot + (heightDot/2)}` > parseInt(window.getComputedStyle(d.querySelector(background_section)).getPropertyValue('height').replace("px","")) ||
                `${topDot - (widthDot/2)}`    < 0
            )
            {
                d.querySelector(bigDot).style.backgroundColor = "red";
            }

            else{
                d.querySelector(bigDot).style.backgroundColor = "yellow";
            }

        }

    }

    d.addEventListener("click", e => {

        if( e.target.matches(`${background_section}`) || e.target.matches(`${background_section} > *`)   ){

            d.querySelector(background_section).style.border = "2px solid yellow";
            d.addEventListener("keydown", detectArrow);
        }

        else{

            d.querySelector(background_section).style.border = null;
            d.removeEventListener("keydown", detectArrow);
 
        }

    });

}