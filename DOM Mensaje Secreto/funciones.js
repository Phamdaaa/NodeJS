function myFunction() {
    function descifrar(texto) {
        return texto.split('').reverse().join('');
    }

    let mensaje = document.getElementById("mensaje").value;
    let mensajenuevo = "";
    let descifrar = "";

    for(let i = 0; i < mensaje.length; i++){
        if(mensaje[i] == '('){
            let j = i + 1;
            while (mensaje[j] != ')'){
                cifrado += mensaje[j];
                j++;
            }
            cifrado = descifrar(cifrado)
            i = j;
        }
        else {mensajenuevo += mensaje[i];}
        mensajenuevo += cifrado
        cifrado = ""
    }

    alert(mensajenuevo);
   }