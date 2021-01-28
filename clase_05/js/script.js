var region_comision = new Array(4)


function perfil_comision_vendedor() {
    region_comision[0] = 0.15
    region_comision[1] = 0.2
    region_comision[2] = 0.3
    region_comision[3] = 0.4
}

function intro_vendedor() {
    //Datos elementales para la definición del vendedor
    let nombre_vendedor = prompt("Ingresa el nombre del vendedor")
    let ok_region = false
    while (!ok_region) {
        var region_vendedor = parseInt(prompt("Ingresa la región (0-3)"))
        if (region_vendedor >= 0 && region_vendedor <= 3) {
            ok_region = true
        }
    }
    let monto_venta_anual = parseFloat(prompt("¿Cual fue su venta anual en 2020?"))
    let ok_seniority = false
    while (!ok_seniority) {
        var seniority_vendedor = prompt("¿Es perfil senior? (S/N)").toUpperCase().trim()
        if (seniority_vendedor == "S" || seniority_vendedor == "N") {
            ok_seniority = true
        }

    }
    let vendedor = new Perfil_Vendedor(nombre_vendedor, region_vendedor, seniority_vendedor)
    let porcentaje_comision = vendedor.comision()

    //Cálculo de comision a cobrar
    let a_cobrar = calcula_comision(porcentaje_comision, monto_venta_anual)
    console.log("De acuerdo a tu perfil cobrarás una comisión del " + (porcentaje_comision * 100) +
        "% de tu venta anual. El valor a percibir es de $" + a_cobrar)
    if (vendedor.senior == "S") {
        let msg = ("Vendedor " + vendedor.nombre.toUpperCase().trim() + " de la región " + vendedor.region +
            ", con perfil Senior cobrará una comisión equivalente a $" + a_cobrar)
            alert(msg)
    } else {
        let msg = ("Vendedor " + vendedor.nombre.toUpperCase().trim() + " de la región " + vendedor.region +
            ", con perfil Junior cobrará una comisión equivalente a $" + a_cobrar)
            alert(msg)
    }
    
}

function Perfil_Vendedor(nombre_vendedor, region_vendedor, seniority_vendedor) {
    let asigna_comision = true
    let asigna_region = 0
    this.nombre = nombre_vendedor
    this.region = region_vendedor
    this.senior = seniority_vendedor
    //En base a la región ingresada, verificamos cual porcentaje de comisión le corresponde por perfil.
    //En caso sea perfil Senior le debemos agregar un 10% a la comision estándard.
    this.comision = function () {
        while (asigna_comision) {
            if (region_vendedor == asigna_region) {
                asigna_comision = false
                if (seniority_vendedor == "S") {
                    return (region_comision[asigna_region] + 0.1)
                } else { return region_comision[asigna_region] }
            } else {
                asigna_region++
            }
        }
    }
}

function calcula_comision(porcentaje_comision, monto_venta_anual) {
    let comision_a_cobrar = (monto_venta_anual * porcentaje_comision)
    return (comision_a_cobrar)
}
