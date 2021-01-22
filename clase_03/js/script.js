var weekday = new Array(7)
function crear_array_dia_de_semana(){
    weekday[0] = "Domingo"
    weekday[1] = "Lunes"
    weekday[2] = "Martes"
    weekday[3] = "Miércoles"
    weekday[4] = "Jueves"
    weekday[5] = "Viernes"
    weekday[6] = "Sábado"
}


function validar_dia_par(){
    for (var i = 0; i<=7; i++){
        if (i == 7){ // La consigna indica que este condicional debe ir ANTES de la comprobación de números pares. Por lo tanto hice el bucle a 7 y un break para cortar el FOR.
            alert("Hemos revisado todo el array. ¡Muchas gracias!")
            break 
        }
        if (i % 2 == 0) {
            console.log("El día " + weekday[i] + " está en una posición " + i.toString() + " que es par dentro de nuestro array");
        }
    }
}
