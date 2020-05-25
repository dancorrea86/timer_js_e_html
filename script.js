const timer = document.getElementById('timer')

timer.innerHTML = "00:00:00";

function start_time() {
    let time = timer.innerHTML // Salva na variável "time" o valor do InnerHTML do elmento timer "00:00:00"
    let hour, minute, second   // Inicializa as variáveis que vamos tranlhar [ hora, minuto e segundo ]

    [ hour, minute, second ] = time.split(':') // Divide o valor da variável time em horas 00, minutos 00 e segundos
    
    second = parseInt(second); // Transforma segundos de String para Integer

    if (second == 60) { // Faz a contagem dos segundos
        second = 0
    } else {
        second += 1
    }

    time = [hour, minute, second] // Salva novamente no Array Time os valores alterados
    
    time = time.join(":") // Transforma o Array em um String

    timer.innerHTML = time // Altera o valor do InnerHTML da elemento timer

    setTimeout(start_time, 1000)
}


setTimeout(start_time, 1000)

