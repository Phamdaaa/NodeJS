function getSeniales(){
    const seniales = []
    const cantSeniales = Math.floor(Math.random() * 29) + 1 ;
    for (let i = 0; i < cantSeniales; i++){
        seniales.push(Math.floor(Math.random() * 360))
    }
    return seniales
}
function convertirSeniales(){
    seniales = getSeniales()
    console.log(seniales)
    senialesString = ""
    nuevasSeniales = ""
    for (let i = 0; i < seniales.length;i++){
        let senial = seniales[i];
        senialesString += senial + "_"
    }
    for (let i = 0; i < seniales.length; i++) {
        let senial = seniales[i];
        switch(true){
            case (senial >= 45 && senial <= 135):
                nuevasSeniales += "N "
                break;
            case (senial > 135 && senial <= 225):
                nuevasSeniales += "O "
                break;
            case (senial > 225 && senial <= 315):
                nuevasSeniales += "S "
                break;
            case (senial > 315 && senial <= 360):
                nuevasSeniales += "E "
                break;
            default:
                nuevasSeniales += "E "
        }
    }
    let ciclos = 0;
    const ciclosValidos = ['NESO', 'OSEN', 'ESON', 'SENO', 'SONE', 'ENOS', 'ONES', 'NOSE'];
    const senialesSinEspacios = nuevasSeniales.replace(/\s+/g, '');
    console.log(senialesSinEspacios)

    for (let i = 0; i < senialesSinEspacios.length - 3; i++) {
        const ciclo = senialesSinEspacios.substring(i, i + 4);
        if (ciclosValidos.includes(ciclo)) {
            ciclos++;
        }
    }
    let porcentajes = [0,0,0,0]
    for (let i = 0; i < nuevasSeniales.length; i++) {
        switch (nuevasSeniales[i]) {
            case 'N':
                porcentajes[0]++;
                break;
            case 'O':
                porcentajes[1]++;
                break;
            case 'E':
                porcentajes[2]++;
                break;
            case 'S':
                porcentajes[3]++;
                break;
        }
    }
        for (let i = 0; i < porcentajes.length; i++) {
            porcentajes[i] = (porcentajes[i] / senialesString.length) * 100;
        }
    console.log(porcentajes)

    var senialesFinal= {
        senialesNormalizadas: senialesString,
        senialesConvertidas: nuevasSeniales,
        cantidadCiclos: ciclos,
        ocurrenciasCuadrante: porcentajes,
    }
    return senialesFinal
}
var seniales = convertirSeniales();
let cuadrantes = ["N","O","E","S"];

var senialesNormalizadas = seniales.senialesNormalizadas;
var senialesConvertidas = seniales.senialesConvertidas;
var cantidadCiclos = seniales.cantidadCiclos;
let porcentaje = seniales.ocurrenciasCuadrante;

let informacionSeniales = "<h2>Informacion Obtenida</h2>";
    informacionSeniales += "Señal generada: "+ senialesNormalizadas + "<br>";
    informacionSeniales += "Señal convertida: "+ senialesConvertidas + "<br>";
    informacionSeniales += "Cantidad de ciclos validos: "+ cantidadCiclos;
    informacionSeniales += "<ul>";
    for (let  i = 0; i<4; i++){
        informacionSeniales += "<li>Porcentaje de ocurrencia de " + cuadrantes[i] + ": " + porcentaje[i].toFixed(2) + "%</li>";
    }
document.getElementById("resultados").innerHTML = informacionSeniales;