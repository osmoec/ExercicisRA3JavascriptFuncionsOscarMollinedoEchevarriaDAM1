//ex13 Passa’t dos valors, retorni el que no és null.

var nonull = (variable1,variable2) => {
    if (variable1 !== null && variable2 === null) {
        return variable1
    }
    else if (variable2 !== null && variable1 === null) {
        return variable2
    }
    else{
        return "els dos son null"
    }
}

console.log(nonull(null, 1))
