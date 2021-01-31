var region_comision = new Array(4)
var array_vendedores = new Array(0)
var array_vendedores_region = new Array(0)
var array_vendedores_venta_anual = new Array(0)
var array_vendedores_comision_asignada = new Array()
var array_vendedores_comision_a_cobrar = new Array()

function perfil_comision_vendedor() {
    region_comision[0] = 0.15
    region_comision[1] = 0.2
    region_comision[2] = 0.3
    region_comision[3] = 0.4
}


// Genera nombre al azar.
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
function generateString(length) {
    let result = ' '
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

//Creación de escenario de 30 vendedores, con su nombre al azar, su región, venta y comisión correspondiente.
function fake_vendedor() {
    for (var i = 0; i <= 29; i++) {
        //Generación del nombre al azar
        array_vendedores.push(generateString(8))
        console.log(array_vendedores)
        //Asignación de una región al azar
        array_vendedores_region.push(fake_region())
        console.log("region:" + array_vendedores_region)
        //Asignación de una venta anual también al azar.
        array_vendedores_venta_anual.push(fake_venta_anual())
        console.log(array_vendedores_venta_anual)
        //En base a la región asignada, buscamos en el array de region_comisión cual es el porcentaje que le corresponde.
        array_vendedores_comision_asignada.push(region_comision[array_vendedores_region[i]])
        console.log("comision: " + array_vendedores_comision_asignada)
        array_vendedores_comision_a_cobrar.push(calcula_comision(array_vendedores_comision_asignada[i], array_vendedores_venta_anual[i]))
        console.log("comision en $$: " + array_vendedores_comision_a_cobrar)




    }
    //Sumando la cantidad de comisión a pagar por la empresa.
    var sum = array_vendedores_comision_a_cobrar.reduce(function (a, b) {
        return a + b
    }, 0)
    console.log("El monto a abonar por el total de comisionees es: " + sum.toFixed(2))
    
    document.getElementById('lbresultado').innerHTML = sum.toFixed(2);

}


// Creación de regiones al azar, que serán asignadas a los vendedores.
function fake_region() {
    console.log("Asignando region al azar...")
    min = Math.ceil(0)
    max = Math.floor(3)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Creación al azar de los montos de venta anual
function fake_venta_anual() {
    console.log("Asignando venta anual ficticia...")
    min = Math.ceil(100)
    max = Math.floor(999)
    return Math.floor(Math.random() * (max - min + 1) + min)
}



function calcula_comision(porcentaje_comision, monto_venta_anual) {
    let comision_a_cobrar = (monto_venta_anual * porcentaje_comision)
    return (comision_a_cobrar)
}
