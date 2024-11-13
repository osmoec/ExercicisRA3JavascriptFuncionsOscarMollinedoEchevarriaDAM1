//ex7  Ha de cridar la funció de l’exercici 3 i retornar el resultat de la funció de l’exercici 6.

function dataavui(){

    var dataactual = new Date()
    console.log(dataactual.toLocaleDateString())
}

function sumardosnumerosmestres(numero1,numero2) {
    return numero1 + numero2+3;
}

dataavui();

sumardosnumerosmestres(1,2)