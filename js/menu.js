function hidecontacts(){
    let elem = document.getElementById("divmyinfo");
    let elem0 = document.getElementById("showcontact");
    let elem2 = document.getElementById("datatohide");
    elem.classList.toggle("hide")
    elem0.classList.toggle("selezionato")
    elem2.classList.toggle("hide")
  
    if(elem0.innerHTML == "Show Contacts"){
        elem0.innerHTML = "Hide Contacts"
        

    }else{
        elem0.innerHTML = "Show Contacts"

    }

}

function readmore(lm){
    let elem = document.getElementById("more1");
    lm.innerHTML = "Hide"
    
    elem.classList.toggle("hide")

}