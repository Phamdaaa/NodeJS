function transformaNumeros(numeros){
    var numero = "";
    var nuevoNumero = []
    for(var i = 0; i < numeros.length; i++){
        if(numeros[i] != " "){
            numero += numeros[i]
        }
        else{ 
            nuevoNumero.push(Number(numero))
            numero = ""
        }
    }
    return nuevoNumero;
}
function filtraNum(numeros){
    var resultado = []
    for(var i = 0; i < numeros.length; i++){
        if(numeros[i][0] == numeros[i][numeros[i].length - 1]){    
            console.log(numeros[i])
            resultado.push(numeros[i])
        }
    }
    return resultado;
}

numeros = "13 101 28883 13 345673 55 9 110 101 "
nuevosNumeros = transformaNumeros(numeros)
console.log(nuevosNumeros)
resultado = filtraNum(nuevosNumeros)
console.log(resultado)

function hacer(){
    var numeros = entrada.split(" ");
    // Iterar sobre cada número y verificar si el primer y último dígito son iguales
    for (var i = 0; i < numeros.length; i++) {
        // Obtener el primer y último dígito del número actual
        var primerDigito = numeros[i][0];
        var ultimoDigito = numeros[i][numeros[i].length - 1];

        // Verificar si el primer y último dígito son iguales
        if (primerDigito === ultimoDigito) {
            console.log(numeros[i]); // Imprimir el número si cumple la condición
        }
}
}