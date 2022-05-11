export function countDown(count_down_time, dateOne, dateTwo){

    const d = document;
    const secondDefineOne = dateOne.substr(17,2);
    const minuteDefineOne = dateOne.substr(14,2);
    const hourDefineOne = dateOne.substr(11,2);
    const dayDefineOne = dateOne.substr(0,2);
    const monthDefineOne = parseInt(dateOne.substr(3,2))-1;
    const yearDefineOne = dateOne.substr(6,4);
    let dateDefineOne = new Date(yearDefineOne, monthDefineOne, dayDefineOne, hourDefineOne, minuteDefineOne, secondDefineOne);

    let yearRest, monthRest, dayRest, hourRest, minutesRest ,secondRest;

    /* let dateDefineOne; */

    const secondDefineTwo = dateTwo.substr(17,2);
    const minuteDefineTwo = dateTwo.substr(14,2);
    const hourDefineTwo = dateTwo.substr(11,2);
    const dayDefineTwo = dateTwo.substr(0,2);
    const monthDefineTwo = parseInt(dateTwo.substr(3,2))-1;
    const yearDefineTwo = dateTwo.substr(6,4);
    const dateDefineTwo = new Date(yearDefineTwo, monthDefineTwo, dayDefineTwo, hourDefineTwo, minuteDefineTwo, secondDefineTwo);
    
    let dateDifferent = dateDefineTwo.getTime() - dateDefineOne.getTime();
    

    /*  */
    const countdown = setInterval(() =>{

        dateDifferent -= 1000;

        yearRest =  parseInt(dateDifferent/1000/60/60/24/30/12);
        monthRest = parseInt((dateDifferent/1000/60/60/24/30) - ((yearRest/30) ));
        dayRest = (dateDifferent/1000/60/60/24) - (monthRest/30) - (yearRest);

        if(dateDifferent === 0){
            clearInterval(countdown);
        }
        
        document.querySelector(count_down_time).innerText = ` Faltan ${yearRest} anios ${monthRest} meses ${dayRest} dias`
        
        /* dateDefineOne = new Date(yearDefineOne, monthDefineOne, dayDefineOne, hourDefineOne, minuteDefineOne, secondDefineOne); */
        
        
        
        /* yearRest = 
            (dateDefineTwo.getFullYear() > dateDefineOne.getFullYear())?
                parseInt(dateDefineTwo.getFullYear() - dateDefineOne.getFullYear() - 1):
                parseInt(dateDefineOne.getFullYear() - dateDefineTwo.getFullYear() - 1);       

        monthRest =
            (dateDefineOne.getMonth() > dateDefineTwo.getMonth())?
                
                (parseInt(dateDefineTwo.getMonth() - dateDefineOne.getMonth()) === 0)?
                    parseInt((12 - dateDefineOne.getMonth()) + dateDefineTwo.getMonth() ):
                    parseInt((12 - dateDefineOne.getMonth()) + dateDefineTwo.getMonth()):

            (parseInt(dateDefineOne.getMonth() - dateDefineTwo.getMonth()) === 0)?
                parseInt(dateDefineTwo.getMonth() - dateDefineOne.getMonth()):
                parseInt(dateDefineTwo.getMonth() - dateDefineOne.getMonth()  );

        dayRest = 
            (dateDefineOne.getDate() > dateDefineTwo.getDate())?
                parseInt(new Date(dateDefineOne.getFullYear(), dateDefineOne.getMonth() + 1, 0).getDate() - 
                (dateDefineOne.getDate() - dateDefineTwo.getDate() + 1)):
    
            (dateDefineOne.getDate() === dateDefineTwo.getDate())?
                parseInt(dateDefineOne.getDate() - dateDefineTwo.getDate()):
                (dateDefineOne.getDate() < dateDefineTwo.getDate())?
                    parseInt(dateDefineTwo.getDate() - dateDefineOne.getDate()):
                    parseInt(0);
        

        hourRest = (dateDefineTwo.getHours() > dateDefineOne.getHours())?
            parseInt(24 - (new Date().getHours()) - 1)
            : parseInt(24 - (new Date().getHours()) - 1);

        
        minutesRest = (dateDefineTwo.getMinutes() > dateDefineOne.getMinutes())?
            parseInt(60 - (new Date().getMinutes()) - 1)
            : parseInt(60 - (new Date().getMinutes()) - 1);

        secondRest = (dateDefineTwo.getSeconds() > dateDefineOne.getSeconds())?
            parseInt( 60 - (new Date().getSeconds()) - 1)
            : parseInt(60 - ( new Date().getSeconds()) - 1);

        let fechaRestanse = new Date(yearRest, monthRest, dayRest, hourRest, minutesRest, secondRest);
        
        let sliceAnioRest = (dateDefineTwo.getFullYear() -  dateDefineOne.getFullYear() - 1).toString().length

        
        document.querySelector(count_down_time).innerText = 
            `Faltan ${fechaRestanse.getFullYear().toString().slice(-sliceAnioRest)} años ` + 
            `${fechaRestanse.getMonth()} meses ` + 
            `${fechaRestanse.getDate()} dias ` + 
            `${fechaRestanse.getHours()} horas ` + 
            `${fechaRestanse.getMinutes()} minutos ` + 
            `${fechaRestanse.getSeconds()} segundos ` +
            `entre las fechas ${dateDefineOne.toLocaleDateString()} y ${dateDefineTwo.toLocaleDateString()}` */
        
    },1000);

}