//ex5 Passa’t un String, retorni el número de vocals que té

function contarVocals(frase){
    var a = 0

    var e = 0

    var iF = 0

    var o = 0

    var u = 0

    for (i = 0; i < frase.length; i++){
        if (frase.charAt(i) === "a"){
            a++
        }
        else if (frase.charAt(i) === "e"){
            e++
        }
        else if (frase.charAt(iF) === "i"){
            iF++
        }
        else if (frase.charAt(i) === "o"){
            o++
        }
        else if (frase.charAt(i) === "u"){
            u++
        }
    }

    console.log("Vocals trobades: "+"a"+a+" e"+e+" i"+iF+" o"+o+" u"+u)
}

contarVocals("hola")