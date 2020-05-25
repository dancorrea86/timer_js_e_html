const timer = document.getElementById('timer')

timer.innerHTML = "00:00:00";

function start_time() {
    let time = timer.innerHTML // Salva na variável "time" o valor do InnerHTML do elmento timer "00:00:00"
    let hour, minute, second   // Inicializa as variáveis que vamos tranlhar [ hora, minuto e segundo ]

    [ hour, minute, second ] = time.split(':') // Divide o valor da variável time em horas 00, minutos 00 e segundos
    
    second = change_minutes_and_seconds(second)

    time = [hour, minute, second] // Salva novamente no Array Time os valores alterados
    
    time = time.join(":") // Transforma o Array em um String

    timer.innerHTML = time // Altera o valor do InnerHTML da elemento timer

    setTimeout(start_time, 1000)
}

function change_minutes_and_seconds(time_to_change) {
    let time = parseInt(time_to_change) // Transforma segundos de String para Integer

    if (time == 10) { // Faz a contagem dos segundos
        time = 0
    } else {
        time += 1
    }
    return time
}

setTimeout(start_time, 1000)