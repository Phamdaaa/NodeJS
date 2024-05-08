function transformaNumeros(numeros){
    var numero = "";
    var nuevoNumero = []
    for(var i = 0; i < numeros.length; i++){
        if(numeros[i] != " "){
            numero += numeros[i]
        }
        else{ 
            nuevoNumero.push(numero)
            numero = ""
        }
    }
    return nuevoNumero;
}
function filtraNum(numeros){
    var resultado = []
    for (var i = 0; i < numeros.length; i++) {
        var primerDigito = numeros[i][0];
        var ultimoDigito = numeros[i][numeros[i].length - 1];
        if (primerDigito === ultimoDigito) {
            resultado.push(numeros[i]);
        }
    }
    return resultado;
}

numeros = "13 101 28883 13 345673 55 9 110 101 "
nuevosNumeros = transformaNumeros(numeros)
console.log(nuevosNumeros)
resultado = filtraNum(nuevosNumeros)
console.log(resultado)