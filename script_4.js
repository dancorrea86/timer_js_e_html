const timer = document.getElementById('timer')

timer.innerHTML = "00:00:00";

function start_time() {
    let time = timer.innerHTML // Salva na variável "time" o valor do InnerHTML do elmento timer "00:00:00"
    let valor;
    let hour, minutes, seconds  // Inicializa as variáveis que vamos tranlhar [ hora, minuto e segundo ]

    [ hour, minutes, seconds ] = time.split(':') // Divide o valor da variável time em horas 00, minutos 00 e segundos
    

    valor = change_minutes_and_seconds(seconds, minutes)
    seconds = valor[0]
    minutes = valor[1]


    time = [hour, minutes, seconds] // Salva novamente no Array Time os valores alterados
    
    time = time.join(":") // Transforma o Array em um String

    timer.innerHTML = time // Altera o valor do InnerHTML da elemento timer

    setTimeout(start_time, 1000)
}

function change_minutes_and_seconds(seconds_to_change, minutes_to_change) {
    let second = parseInt(seconds_to_change) // Transforma segundos de String para Integer
    let minute = parseInt(minutes_to_change)
    let number_of_seconds_minutes = 59

    if (second >= number_of_seconds_minutes) { // Faz a contagem dos segundos
        second = 0
    } else {
        second += 1
    }

    if (second == 0) { // Faz a contagem dos segundos
        if (minute >= number_of_seconds_minutes) { // Faz a contagem dos segundos
            minute = 0
        } else {
            minute += 1
        }
    }

    second = second < 10 ? '0'+second.toString() : second.toString()
    minute = minute < 10 ? '0'+minute.toString() : minute.toString()

    return [second, minute]
}

function time_smaller_ten(time) {
    console.log('')
}

setTimeout(start_time, 1000)