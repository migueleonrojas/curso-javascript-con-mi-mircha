export default function alarma(startAlarm, stopAlarm, alarm){
    
    const d = document;

    d.querySelector(stopAlarm).disabled = true;

    d.addEventListener("click", e => {

        if(e.target.matches(startAlarm)){

            if( d.querySelector(alarm).paused){
                d.querySelector(alarm).play();
                d.querySelector(startAlarm).disabled = true;
                d.querySelector(stopAlarm).disabled = false;
            }    

        }

        if(e.target.matches(stopAlarm)){

            if(!d.querySelector(alarm).paused){
                d.querySelector(alarm).pause();
                d.querySelector(startAlarm).disabled = false;
                d.querySelector(stopAlarm).disabled = true;
            }
        }

    });

}