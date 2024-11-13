//ex5 Passa’t un String, retorni el número de vocals que té

function contarVocals(frase){
    var vocalsN = 0
    var vocals = "aeiouAEIOU"

    for (var i = 0; i < frase.length; i++){
        if (vocals.includes(frase.charAt(i))){
            vocalsN++
        }
    }

    console.log("Vocals trobades: "+vocalsN)
}

contarVocals("aeaeaeaeae")