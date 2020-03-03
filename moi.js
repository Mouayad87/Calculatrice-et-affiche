var number1=document.querySelector("#number1");
var number2=document.querySelector("#number2");
var operateur=document.querySelector("#op");
var result=document.querySelector("#result");
var verif=document.querySelector("#verif");

result.style.display='none';
verif.style.display='none';

number2.addEventListener('input',calcule);

function calcule(){
    let nbr1=parseFloat(number1.value);
    let oper=operateur.value;
    let nbr2=parseFloat(number2.value);

    switch(oper){
        case '+':
            result.style.display='block';
            result.textContent="le resultatde l'operateur est : "+(nbr1+nbr2);
            break;
        case '-':
            result.style.display='block';
            result.textContent="le resultatde l'operateur est : "+(nbr1-nbr2);
            break;
        case '*':
            result.style.display='block';
            result.textContent="le resultatde l'operateur est : "+(nbr1*nbr2);
            break;
        case '/':
            result.style.display='block';
            result.textContent="le resultatde l'operateur est : "+(nbr1/nbr2);
            verif.style.display='block';
            if (nbr2==0){
                verif.textContent="Nombre est 0 vous aurez une valeur infine";
            }
            else if (nbr2<0){
                verif.textContent="Nombre saisie est inferieurn à 0, vous aurez une valeur negativ";
            }
            else{
                verif.textContent="Nombre different de 0";
            }
           
            break;
    }

}