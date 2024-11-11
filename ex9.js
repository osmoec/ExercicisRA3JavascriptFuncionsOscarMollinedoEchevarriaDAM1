//ex9 Repeteix l’exercici anterior però com a funció anònima.

var verificar2 = function(number1, number2) {
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

verificar2(31,2)