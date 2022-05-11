export default function agregarMenu(elemento = undefined){

    const d = document;

    d.addEventListener("click", e => {

        if(e.target.matches(`.button_hamburger`) || e.target.matches(`.button_hamburger *`)){
            
            if(elemento instanceof HTMLElement){

                let $divContentMenu;
                
                elemento.classList.toggle("is-active");
                        
                if(/is-active/g.test(elemento.getAttributeNode("class").value)){
        
                    if(document.body.contains(document.querySelector(".menu_mobile"))){
                        
                        document.querySelector(".menu_mobile").remove();
                        
                    }
                    
                    $divContentMenu = document.createElement("div");
                    $divContentMenu.setAttribute("class", "menu_mobile")   
        
                    let $fragment = document.createDocumentFragment();
        
                    document.querySelectorAll(".section").forEach(e => {
        
                        let $optionMenu = document.createElement("a");
                        $optionMenu.innerText = e.children[0].outerText;
                        $optionMenu.setAttribute("href",`#${e.id}`);
                        $optionMenu.setAttribute("class", "option_menu_mobile")
        
                        let $clone = document.importNode($optionMenu, true);
                        $fragment.appendChild($clone);
        
                        $optionMenu.textContent = e;
                        $fragment.appendChild($clone);  
        
                    });

                    /* section.forEach(elemento => {
                        console.log(elemento);
                    }) */
         
                    $divContentMenu.appendChild($fragment);
        
                    document.querySelector('main').insertAdjacentElement("beforebegin", $divContentMenu);
        
                    document.querySelector(".menu_mobile").classList.add("move_menu_mobile_in");
        
                    let $opcionMenuCreate = document.querySelectorAll(".option_menu_mobile");
                    
                }
                else{
                    
                    document.querySelector(".menu_mobile").classList.remove("move_menu_mobile_in");
                    document.querySelector(".menu_mobile").classList.add("move_menu_mobile_out"); 
                    elemento.classList.remove("is-active");   
                }
            }    
        }

        if(e.target.matches(`.option_menu_mobile`)){
                            
            document.querySelector(".menu_mobile").classList.remove("move_menu_mobile_in");
            document.querySelector(".menu_mobile").classList.add("move_menu_mobile_out");
            elemento.classList.remove("is-active"); 
        }
    });

}; 