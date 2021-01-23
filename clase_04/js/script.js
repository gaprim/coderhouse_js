
var puntos_usuario = 0
var puntos_js = 0
var resultado_dado_usuario = 0
var resultado_dado_js = 0

var jugamos = true



function presentacion() {
    //Nos presentamos...
    nombre_usuario = prompt("Yo me llamo JS. ¿Cuál es tu nombre?")
    if (nombre_usuario == null){
        nombre_usuario = "persona"
    }
    partida()
    //Usuario ingresa un número que corresponde a su dado
}

function partida() {
    console.log("Partida iniciada...")
    while (jugamos) {
        console.log("tirando dado usuario")
        //var dado_usuario = prompt("Decime un número del 1 al 6")

        //JS tira los dado obteniendo el valor en random (Fair play ante todo!)
        var resultado_dado_usuario = dado_js()
        console.log("tirando dado js")
        var resultado_dado_js = dado_js()

        console.log("dado usuario " + resultado_dado_usuario)
        console.log("dado_js " + resultado_dado_js)

        //Quien saca el número más alto, gana un punto. Si hay empate no suma.
        valida_coincidencia(resultado_dado_usuario, resultado_dado_js, nombre_usuario)
        jugamos = valida_jugamos() //Llamamos a la funcion jugamos para evaluar si queremos seguir jugando
        if (!jugamos){
            var score_final = "PANEL DE PUNTOS FINALES: " + nombre_usuario.toLocaleUpperCase() +" = " + puntos_usuario + " JS = " + puntos_js
             alert(score_final)
             if (puntos_usuario > puntos_js){
                alert("Felicitaciones " + nombre_usuario.toLocaleUpperCase())
            }
             console.log("Partida finalizada.")
        }

    }
}

//Funcion que valida si queremos seguir jugando o no
function valida_jugamos() {
    var otro_tiro = "s"
    while (jugamos = true) {
        var otro_tiro = prompt("Seguimos (S/N)")
        if (otro_tiro == null) {
            alert("Debes contestar con S o con N")
        } else {
            otro_tiro = otro_tiro.toLocaleLowerCase()
            console.log(otro_tiro)
            if (otro_tiro == "n") {
                jugamos = false
                return jugamos
                break
            } else {
                if (otro_tiro == "s") {
                    jugamos = true
                    console.log("quiere seguir")
                    return jugamos
                } else {
                    alert("'" + otro_tiro + "' no es un respuesta válida, debes contestar con S o con N")
                    //jugamos = true
                }
            }
        }

    }
}


function dado_js() {
    console.log("Tirando dados...")
    min = Math.ceil(1)
    max = Math.floor(6)
    return Math.floor(Math.random() * (max - min + 1) + min) 
}

function valida_coincidencia(resultado_dado_usuario, resultado_dado_js, nombre_usuario) {
    if (resultado_dado_usuario == resultado_dado_js) {
        alert("Coincidimos. Nadie gana puntos")
    } else {
        if (resultado_dado_usuario > resultado_dado_js) {
            puntos_usuario += 1
            alert("Ok!, punto para vos " + nombre_usuario.toLocaleUpperCase())
        } else {
            puntos_js += 1
            alert("Esa! JS gana!")
        }
    }
    console.log(puntos_usuario, puntos_js)
    var score_jugada = "PANEL DE PUNTOS: " + nombre_usuario.toLocaleUpperCase() +" = " + puntos_usuario + " JS = " + puntos_js
    alert(score_jugada)
    location.reload();
    return (puntos_usuario, puntos_js)
}

