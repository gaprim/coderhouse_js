alert("Bienvenido al gimnasio Personal Trainer Club")

var nombre = prompt("¿Cuál es tu Nombre?")
var apellido = prompt("¿Cuál es tu Apellido?")
var fullName = nombre + " " + apellido
var edad = prompt("¿Qué edad tenés?")
edad = parseInt(edad)
var year = 2021 - edad
var mensaje = ""

if (edad < 18){
    mayorEdad = year + 18
    mensaje = "Sos menor de edad, no podemos darte de alta hasta el año " + mayorEdad
}
else if (edad > 18 && edad < 25) {
    mensaje = "Tenés un 10% de descuento"
}
else if (edad > 25) {
    mensaje = "Tenés un 15% de descuento" 
}
else if (edad == 18 || edad == 25) {
    mensaje = "Que suerte! Tenemos un descuento especial del 25%"
}

console.log("Nombre completo: " + fullName)
if (!year) {
     console.log("Año de nacimiento: no puede calcularse")
}
else {
     console.log("Año de nacimiento: " + year)
}
alert(mensaje)
console.log(mensaje)
