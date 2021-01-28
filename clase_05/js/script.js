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
    let region_vendedor = parseInt(prompt("Ingresa la región (0-3)"))
    var vendedor = new Perfil_Vendedor(nombre_vendedor, region_vendedor)
    console.log(vendedor)
    console.log(vendedor.comision())
}

function Perfil_Vendedor(nombre_vendedor, region_vendedor) {
    let asigna_comision = true
    let asigna_region = 0
    this.nombre = nombre_vendedor
    this.region = region_vendedor

    this.comision = function () {
        while (asigna_comision) {
            if (region_vendedor == asigna_region) {
                asigna_comision = false
                return region_comision[asigna_region]
            } else {
                asigna_region++
            }
        }


    }
}
