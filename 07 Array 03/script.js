function transformaNums(numeros){
    var numero = "";
    var nuevoNumero = []
    for(var i = 0; i < numeros.length; i++){
        if (numeros[i] != " "){
            numero += numeros[i]
        }
        else{ 
            nuevoNumero.push(numero)
            numero = ""
        }
    }
    if (numero != "") {
        nuevoNumero.push(numero);
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

document.addEventListener('DOMContentLoaded', function () {
    const Input = document.getElementById('Input');
    const Button = document.getElementById('Button');

    Button.addEventListener('click', function () {
        const file = Input.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function(event) {
                const entrada = event.target.result;
                console.log('Contenido del archivo:', entrada);
                var numeros = transformaNums(entrada)
                var salida = filtraNum(numeros)
                const txt = new Blob([salida], { type: 'text/plain' });
                const url = window.URL.createObjectURL(txt);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'salida.txt';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
                
            };

            reader.readAsText(file);
        } else {
            console.error('No se seleccionó ningún archivo.');
        }
    });
});
