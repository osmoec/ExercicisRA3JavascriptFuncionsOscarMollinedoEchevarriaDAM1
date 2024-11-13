//ex9 Repeteix l’exercici anterior però com a funció anònima.

var verificar = function (number1, number2) {
    var bool1 = number1 > 30 ? true : false

    var bool2 = number2 > 30 ? true : false

    console.log("dels dos numeros son major de 30:"+" numero1: "+bool1+" numero2: "+bool2)
}

verificar(2,40);