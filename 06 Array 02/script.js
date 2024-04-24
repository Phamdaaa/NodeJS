function esPar(numero) {return numero % 2 === 0;}

function conjetura(semilla){
    let mayor = 0;
    let array = [semilla]
    let n = semilla;
    while (n != 1){
        if (mayor < n){ mayor = n}
        if (esPar(n) == true){
            n = n/2
            array.push(n);
        }
        else {
            n = n*3+1   
            array.push(n);
        }
    }
    array.push(mayor)
    return array
}
function guardarSemilla() {
    var formulario = document.getElementById("Form");
    let semilla = document.getElementById("semillaInput").value;

    let secuencia = conjetura(semilla);
    console.log(secuencia)

    var mayor = secuencia.pop()
    var largo = secuencia.length
    console.log(secuencia)

    var info = document.createElement("p");
    info.textContent = "Largo de la Secuencia: " + largo;
    formulario.appendChild(info);
    var info = document.createElement("p");
    info.textContent = "Mayor Numero de la Secuencia: " + mayor;
    formulario.appendChild(info);
}


