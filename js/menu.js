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




function sections(index){
    let elem = document.getElementById("divmyinfo");
    let elem0 = document.getElementById("showcontact");
    let elem2 = document.getElementById("datatohide");
    elem.classList.add("hide")
    elem0.classList.remove("selezionato")
    elem2.classList.add("hide")
  
    if(elem0.innerHTML == "Show Contacts"){
        elem0.innerHTML = "Hide Contacts"
        

    }else{
        elem0.innerHTML = "Show Contacts"

    }

    var listection = document.getElementsByClassName("cv");
  

    
    for(let k=0; k < listection.length; k++){
    
        listection[k].classList.add("hidesection")


    }
    listection[index].classList.remove("hidesection")




}


window.addEventListener("blur", () => {document.title = "GIVE ME A CHANCE" })

window.addEventListener("focus", () => {document.title = "KARIM LATRACH" })


function closeprivacy(){
    let elem= document.getElementById("privacy")
    let elem1= document.getElementById("showprivacy")
    

    elem.classList.toggle("hideprivacy")
    elem1.classList.toggle("hideprivacy")

}