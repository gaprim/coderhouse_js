var compra = new Carrito()
var listaCompra = document.querySelector('#lista-compra tbody')
var carrito = document.getElementById('carrito')
var procesarCompraBtn = document.getElementById('procesar-compra')
var cliente = document.getElementById('cliente')
var correo = document.getElementById('correo')






cargarEventos()

function cargarEventos(){
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra())
    carrito.addEventListener('click', (e)=>{compra.eliminarProducto(e)})
    compra.calcularTotal()
    procesarCompraBtn.addEventListener('click',procesarCompra)
    
}



function procesarCompra(e) {
    e.preventDefault()
    if(compra.obtenerProductosLocalStorage().length === 0){
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'El carrito está vacío.',
            timer : 1600,
            showConfirmButton: false
            
          }).then(function(){window.location = "index.html"})
    }else{

        if(cliente.value === '' || correo.value === ''){
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Debe indicar su nombre y correo electrónico',
                timer : 1600,
                showConfirmButton: false
                
              })
        } else {
            var cargandoGIF = document.querySelector('#cargando')
            cargandoGIF.style.display = 'block'
            var enviado = document.createElement('img')
            enviado.src = 'img/mail.gif'
            enviado.style.display  = 'block'
            enviado.width = 150
            setTimeout(() => {
                cargandoGIF.style.display = 'none'
                document.querySelector('#loaders').appendChild(enviado)
                setTimeout(() => {
                    enviado.remove()
                    compra.vaciarLocalStorage()
                    window.location = "index.html"
                }, 2000);
            }, 3000);
        }
    } 

    
}