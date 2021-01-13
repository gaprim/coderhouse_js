var nombre = prompt("Ingresa tu nombre: ")
console.log("Hola " + nombre + ", lograste tu primer script en JS") 

var apellido = prompt("Ingresa tu apellido: ")
console.log("Ahora sé que te llamas  " + nombre + " " + apellido) 

var anioNacimiento = prompt("En qué año naciste? Ej: 1985")
var edad = 2021 - parseInt(anioNacimiento)
var numeroDeseado = prompt("Decime un número entre 1 y 50")
var edadCalculada = parseInt(edad) + parseInt(numeroDeseado)
console.log("Hoy tenés " + edad + " años.")
console.log("¿Sabias que si sumo el numero " + numeroDeseado + " a tu edad actual hoy tendrias " + edadCalculada + " años?" )
var nuevoAnioNacimiento = 2021 - edadCalculada
console.log("y eso significaría que hubieses nacido en el año " + nuevoAnioNacimiento)

var textoAlert = "Hola " + nombre + " " + apellido + ". Ahora sé que tenés " + edad + " años, y que si le sumo a tu edad el número " + numeroDeseado +
" que ingresaste recien tendrias " + edadCalculada + " años. Y eso significa haber nacido en " + nuevoAnioNacimiento + " en lugar de " + anioNacimiento + "."
alert(textoAlert)
