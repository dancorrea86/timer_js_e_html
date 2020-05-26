const timer = document.getElementById('timer')

timer.innerHTML = "00:00:10";

function start_time() {
    let time = timer.innerHTML // Salva na variável "time" o valor do InnerHTML do elmento timer "00:00:00"
    let valor;
    let hour, minutes, seconds  // Inicializa as variáveis que vamos tranlhar [ hora, minuto e segundo ]

    [ hour, minutes, seconds ] = time.split(':') // Divide o valor da variável time em horas 00, minutos 00 e segundos
    

    valor = change_minutes_and_seconds(seconds, minutes, hour)
    seconds = valor[0]
    minutes = valor[1]
    hour = valor[2]


    time = [hour, minutes, seconds] // Salva novamente no Array Time os valores alterados
    
    time = time.join(":") // Transforma o Array em um String

    timer.innerHTML = time // Altera o valor do InnerHTML da elemento timer

    setTimeout(start_time, 1000)
}

function change_minutes_and_seconds(seconds_to_change, minutes_to_change, hour_to_change) {
    let second = parseInt(seconds_to_change) // Transforma segundos de String para Integer
    let minute = parseInt(minutes_to_change)
    let hour = parseInt(hour_to_change)


    second = time_smaller_ten(second)

    if (second == '00') { // Faz a contagem dos segundos
        minute = time_smaller_ten(minute)
    }

    if (minute == '00' && second == '00') { // Faz a contagem dos segundos
        hour = time_smaller_ten(hour)
    }

    second = second < 10 ? '0'+second.toString() : second.toString()
    minute = minute < 10 ? '0'+minute.toString() : minute.toString()
    hour = hour < 10 ? '0'+hour.toString() : hour.toString()

    return [second, minute, hour]
}

function time_smaller_ten(time_unit) {
    let number_of_seconds_minutes = 59
    if (time_unit >= number_of_seconds_minutes) { // Faz a contagem dos segundos
        time_unit = 0
    } else {
        time_unit += 1
    }

    return time_unit
}

setTimeout(start_time, 1000)