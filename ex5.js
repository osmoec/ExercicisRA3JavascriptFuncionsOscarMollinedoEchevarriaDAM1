//ex5 Passa’t un String, retorni el número de vocals que té

function contarVocals(frase){
    var vocals = 0

    for (i = 0; i < frase.length; i++){
        if (frase.charAt(i) === "a"){
            vocals++
        }
        else if (frase.charAt(i) === "e"){
            vocals++
        }
        else if (frase.charAt(i) === "i"){
            vocals++
        }
        else if (frase.charAt(i) === "o"){
            vocals++
        }
        else if (frase.charAt(i) === "u"){
            vocals++
        }
    }

    console.log("Vocals trobades: "+vocals)
}

contarVocals("hola")