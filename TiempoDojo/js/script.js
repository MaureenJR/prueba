function mostrarAlerta(element_a){
    var ciudad = element_a.innerText;
    alert("Loading weather report " + ciudad);
}

function quitarCookies(){
    var cookie = document.querySelector(".cookie");
    cookie.remove();
}

function difTemp(event){
    let tipoTemp = event.target.value;
    if (tipoTemp === "Celsius"){
        let valorTemp = document.querySelectorAll('.temp');
        let convertir;
        for(var i=0; i<valorTemp.length; i++){
            convertir = (valorTemp[i].innerHTML - 32)* 5/9;
            valorTemp[i].innerHTML = Math.round(convertir);
        }
        console.log("Celsius");
    } else{
        let valorTemp = document.querySelectorAll('.temp');
        let convertir;
        for(var i=0; i<valorTemp.length; i++){
            convertir = (valorTemp[i].innerHTML * 9/5)+ 32;
            valorTemp[i].innerHTML = Math.round(convertir);
        }
        console.log("Fahrenheit")
    }
}

let selectorTemp = document.querySelector('.selector');
selectorTemp.addEventListener('change', difTemp);