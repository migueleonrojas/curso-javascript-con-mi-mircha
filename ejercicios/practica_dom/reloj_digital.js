export default function relojDigital(startReloj, stopReloj){

    const d = document;
    let hour;

    d.querySelector(stopReloj).disabled = true;

    d.addEventListener("click", e => {

        if(e.target.matches(startReloj)){

            if(!d.body.contains(d.querySelector(".hour_reloj"))){

                let $reloj = d.createElement("div");
                $reloj.setAttribute("class", "reloj");
                $reloj.innerText = new Date().toLocaleTimeString(); 
                hour = setInterval(function(){
                    $reloj.innerText = new Date().toLocaleTimeString();  
                },
                1000
                )
                
                $reloj.setAttribute("class", "hour_reloj")
                d.querySelector('.buttons_reloj_alarm').insertAdjacentElement("afterend", $reloj);
                d.querySelector(startReloj).disabled = true;
                d.querySelector(stopReloj).disabled = false;
            }   
        }        

        if(e.target.matches(stopReloj)){

            if(d.body.contains(d.querySelector(".hour_reloj"))){
                
                clearInterval(hour);
                d.querySelector(".hour_reloj").remove();
                d.querySelector(startReloj).disabled = false;
                d.querySelector(stopReloj).disabled = true;

            }
        }

    });
}