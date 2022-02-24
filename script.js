var requestSpan = document.querySelector('#request');
var connectionsSpan= document.querySelector('#connections');
var userName = document.querySelector('#username');


function accept(id){
    
    var element = document.querySelector(id);
    console.log(element);
    element.remove()
    requestSpan.innerText--;
    connectionsSpan.innerText++;
}

function ignore(id){
    var element= document.querySelector(id);
    element.remove();
    requestSpan.innerText--;  
}

function edit(){
    userName.innerText = "Fabian Bustos";
}



