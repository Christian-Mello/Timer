//Variaeis de segundo,minutos e horas
var sec = 0
var Min = 0
var hr = 0
var intervalo

function doisDigitos(digito) {
    if (digito < 10) {
        return ('0' + digito);
    } else {
        return (digito)
    }

}

//botão de inciar
function start() {

    intervalo = setInterval(contador, 1000);
}
//botão de pausar
function pause() {
    clearInterval(intervalo);
}
//botão de parar
function stop() {
    clearInterval(intervalo);
    sec = 0
    Min = 0
    document.getElementById('relogio').innerText = '00:00:00'
}

//funcionalidade de contagem em sequência
function contador() {
    sec++
    if (sec == 60) {
        Min++
        sec = 0
        if (Min == 60) {
            Min = 0
            hr++
        }
    }
    if (hr > 25) {
        clearInterval(intervalo);
        sec = 0
        Min = 0
        document.getElementById('relogio').innerText = '00:00:00'
    }

    console.log('foi');
    document.getElementById('relogio').innerText = doisDigitos(hr) + ':' + doisDigitos(Min) + ':' + doisDigitos(sec)
}

