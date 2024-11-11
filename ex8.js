//ex8 Passa’t dos enters, retornar true si un d’ells és igual a 30 o si la seva suma és igual a 30.

function verificar(number1, number2) {
    var bool1 = false;

    var bool2 = false;

    if (number1 > 30) {
        bool1 = true;
    }
    if (number2 > 30) {
        bool2 = true;
    }

    console.log("dels dos numeros son major de 30:"+" numero1: "+bool1+" numero2: "+bool2)
}

verificar(2,40);