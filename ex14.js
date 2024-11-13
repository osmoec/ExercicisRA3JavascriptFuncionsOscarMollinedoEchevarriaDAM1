//ex14

var posicio = (frase,paraula) => frase.length-frase.search(paraula)

console.log(posicio("Hola com estas","com"))

var dividir = (frase,paraula) => (frase.substring(posicio(frase,paraula))).replaceAll(" ","")

console.log(dividir("Hola com estas","com"))