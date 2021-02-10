
var puntos_usuario = 0
var puntos_js = 0
var resultado_dado_usuario = 0
var resultado_dado_js = 0
var jugamos = true
var nombre_usuario = ""




function presentacion() {
    //Nos presentamos...
    botones_en_juego(false)
    nombre_usuario = document.getElementById("userNameField").value
    if (validaIngresoUser(nombre_usuario)) {
        partida()
    }
}

function validaIngresoUser(nombre_usuario) {
    let ok_nombre = true

    while (ok_nombre) {
        if (nombre_usuario.length <= 0) {
            ok_nombre = false
            //Creamos un elemento nodo vacio
            //sin ID, sin atributos ni contenido
            var sp1 = document.createElement("label")

            //Le damos un id a ese nuevo elemento, lo llamaremos newUserLabel
            sp1.id = "newUserLabel"

            //Creamos el contenido para el nuevo label
            var sp1_content = document.createTextNode("Es necesario ingresar tu nombre")

            //Aplicamos el nuevo contenido al nuevo elemento label
            sp1.appendChild(sp1_content)

            //Buscamos la referencia del label que vamos a reemplazar. 
            var sp2 = document.getElementById("labelUserName")
            var parentDiv = sp2.parentNode

            //Reemplazamos el label existe por el nuevo label
            parentDiv.replaceChild(sp1, sp2)

            // Al nuevo lavel le colocamos el id original para que sea encontrado 
            // caso el usuario insista en no colocar su nombre
            // También le doy la misma clase y otros atributos que el label original
            sp1.setAttribute("id", "labelUserName")
            sp1.setAttribute("style", "color: red;");
            sp1.setAttribute("class", "form-label");
            sp1.setAttribute("for", "forexampleFormControlInput1");
            botones_en_juego(false)
        } else {
            botones_en_juego(true)
            return true
        }
    }
}

function botones_en_juego(estamos_jugando) {
    if (estamos_jugando) {
        document.getElementById("boton_iniciar").disabled = true;
        document.getElementById("boton_otro_tiro").disabled = false;
        document.getElementById("boton_me_aburri").disabled = false;
    } else {
        document.getElementById("boton_iniciar").disabled = false;
        document.getElementById("boton_otro_tiro").disabled = true;
        document.getElementById("boton_me_aburri").disabled = true;
    }

}

function partida() {
    log_de_juego("Partida iniciada...")
    while (jugamos) {
        log_de_juego("tirando dado usuario...")


        //JS tira los dado obteniendo el valor en random (Fair play ante todo!)
        var resultado_dado_usuario = dado_js()
        log_de_juego("tirando dado js")
        var resultado_dado_js = dado_js()

        log_de_juego("dado usuario " + resultado_dado_usuario)
        log_de_juego("dado_js " + resultado_dado_js)


        //Quien saca el número más alto, gana un punto. Si hay empate no suma.
        valida_coincidencia(resultado_dado_usuario, resultado_dado_js, nombre_usuario)
        document.getElementById("puntos_participante").innerHTML = puntos_usuario
        document.getElementById("puntos_javascript").innerHTML = puntos_js
        if (puntos_usuario > puntos_js) {
            document.getElementById("puntos_participante").setAttribute("class", "table-success")
            document.getElementById("puntos_javascript").setAttribute("class", "table-danger")

        } else {
            if (puntos_usuario < puntos_js) {
                document.getElementById("puntos_participante").setAttribute("class", "table-danger")
                document.getElementById("puntos_javascript").setAttribute("class", "table-success")
            }
            else {
                document.getElementById("puntos_participante").setAttribute("class", "table-warning")
                document.getElementById("puntos_javascript").setAttribute("class", "table-warning")
            }
        }
        return
    }
}


function quiero_otro_tiro() {
    var otro_tiro = "s"
    jugamos = true
    log_de_juego("quiero seguir")
    partida()
    return jugamos
}

function me_aburri() {
    let winner_is = ""
    if (puntos_usuario > puntos_js) {
        winner_is = nombre_usuario + " es el ganador. Felicitaciones!"
    } else {
        if (puntos_usuario < puntos_js) {
            winner_is = "JavaScript ganó. Otra vez será " + nombre_usuario + "!"
        }
        else {
            winner_is = "Empate rabioso! Ya habrá revancha"
        }
    }

    document.getElementById("score_final").innerHTML = winner_is
}


function dado_js() {
    min = Math.ceil(1)
    max = Math.floor(6)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function valida_coincidencia(resultado_dado_usuario, resultado_dado_js, nombre_usuario) {
    if (resultado_dado_usuario == resultado_dado_js) {
        log_de_juego("Coincidimos. Nadie gana puntos")
    } else {
        if (resultado_dado_usuario > resultado_dado_js) {
            puntos_usuario += 1
            log_de_juego("Ok!, punto para vos " + nombre_usuario.toLocaleUpperCase())
        } else {
            puntos_js += 1
            log_de_juego("Esa! JS gana!")
        }
    }
    var score_jugada = "PANEL DE PUNTOS: " + nombre_usuario.toLocaleUpperCase() + " = " + puntos_usuario + " JS = " + puntos_js
    log_de_juego(score_jugada)
    return (puntos_usuario, puntos_js)
}

function log_de_juego(log_texto) {
    document.getElementById("textAreaLog").innerHTML += log_texto + '\r\n'
    document.getElementById("textAreaLog").scrollTop = document.getElementById("textAreaLog").scrollHeight
}