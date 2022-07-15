let contadorMenorEsqueda = document.querySelector(".btn_menos_adv1");
let spam = document.querySelector("#spam");
let contadorMaiorEsqueda = document.querySelector("#btn_mais_adv1");
let cont = 0;
let cont2 = 0;
let spam2 = document.querySelector("#spam2");
spam.style.fontSize = "39px";
spam2.style.fontSize = "39px";
let h1 = document.querySelector("h1").style;
h1.color = "#8AFF00";
h1.fontSize = "56px";
h1.textAlign = "center";


function contaMais(){
    cont += 1;
    spam.innerText = cont;    
}

function contaMenos(){
    cont -= 1;
    spam.innerText = cont;    
}

function contaMaisD(){
    cont2 += 1;
    spam2.innerText = cont2;    
}

function contaMenosD(){
    cont2 -= 1;
    spam2.innerText = cont2;    
}


