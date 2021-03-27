class Carrito {
  comprarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains("agregar-carrito")) {
      var producto = e.target.parentElement.parentElement;
      this.leerDatosProducto(producto);
    }
  }

  leerDatosProducto(producto) {
    var infoProducto = {
      imagen: producto.querySelector("img").src,
      titulo: producto.querySelector("h4").textContent,
      precio: producto.querySelector(".precio span").textContent,
      id: producto.querySelector("a").getAttribute("data-id"),
      cantidad: 1,
    };

    var productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function (productoLS) {
      if (productoLS.id === infoProducto.id) {
        productosLS = productoLS.id;
      }
    });
    if (productosLS === infoProducto.id) {
      Swal.fire({
        type: "info",
        title: "Oops...",
        text: "El producto ya ha sido agregado",
        timer: 1200,
        showConfirmButton: false,
      });
    } else {
      this.insertarCarrito(infoProducto);
    }
  }
  insertarCarrito(producto) {
    var row = document.createElement("tr");

    row.innerHTML = `
            <td> 
                <img src="${producto.imagen}" width = 100 
            </td> 
            <td> ${producto.titulo}</td>   
            <td> ${producto.precio}</td>
            <td> 
                <a href="#" class = "borrar-producto fas fa-times-circle text-decoration-none text-danger" data-id="${producto.id}"></a>
            </td>    
            `;
    listaProductos.appendChild(row);
    this.guardarProductosLocalStorage(producto);
  }

  eliminarProducto(e) {
    e.preventDefault();
    var producto, productoID;
    if (e.target.classList.contains("borrar-producto")) {
      e.target.parentElement.parentElement.remove();
      producto = e.target.parentElement.parentElement;
      productoID = producto.querySelector("a").getAttribute("data-id");
    }
    this.eliminarProductoLocalStorage(productoID);
    this.calcularTotal();
  }

  vaciarCarrito(e) {
    e.preventDefault();
    while (listaProductos.firstChild) {
      listaProductos.removeChild(listaProductos.firstChild);
    }
    this.vaciarLocalStorage();
    return false;
  }

  guardarProductosLocalStorage(producto) {
    var productos;
    productos = this.obtenerProductosLocalStorage();
    productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));
  }

  obtenerProductosLocalStorage() {
    var productoLS;
    if (localStorage.getItem("productos") === null) {
      productoLS = [];
    } else {
      productoLS = JSON.parse(localStorage.getItem("productos"));
    }
    return productoLS;
  }

  eliminarProductoLocalStorage(productoID) {
    var productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function (productoLS, index) {
      if (productoLS.id === productoID) {
        productosLS.splice(index, 1);
      }
    });
    localStorage.setItem("productos", JSON.stringify(productosLS));
  }

  leerLocalStorage() {
    var productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function (producto) {
      var row = document.createElement("tr");
      row.innerHTML = `
            <td> 
                <img src="${producto.imagen}" width = 100 
            </td> 
            <td> ${producto.titulo}</td>   
            <td> ${producto.precio}</td>
            <td> 
                <a href="#" class = "borrar-producto fas fa-times-circle text-decoration-none text-danger" data-id="${producto.id}"></a>
            </td>    
            `;
      listaProductos.appendChild(row);
    });
  }

  leerLocalStorageCompra() {
    let productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function (producto) {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>
                    <img src="${producto.imagen}" width=100>
                </td>
                <td>${producto.titulo}</td>
                <td>${producto.precio}</td>
                <td>
                    <input type="number" class="form-control cantidad" min="1" value=${
                      producto.cantidad
                    }>
                </td>
                <td id='subtotales'>${producto.precio * producto.cantidad}</td>
                <td>
                    <a href="#" class="borrar-producto fas fa-times-circle text-decoration-none text-danger" style="font-size:20px " data-id="${
                      producto.id
                    }"></a>
                </td>
            `;
      listaCompra.appendChild(row);
    });
  }

  eliminarProductoLocalStorage(productoID) {
    let productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function (productoLS, index) {
      if (productoLS.id === productoID) {
        productosLS.splice(index, 1);
      }
    });

    localStorage.setItem("productos", JSON.stringify(productosLS));
  }

  vaciarLocalStorage() {
    localStorage.clear();
  }

  procesarPedido(e) {
    e.preventDefault();
    if (this.obtenerProductosLocalStorage().length === 0) {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "El carrito está vacío.",
        timer: 1600,
        showConfirmButton: false,
      });
    } else {
      location.href = "compra.html";
    }
  }

  calcularTotal() {
    var productoLS;
    var total = 0,
      subtotal = 0,
      iva = 0;
    productoLS = this.obtenerProductosLocalStorage();
    for (let i = 0; i < productoLS.length; i++) {
      let element = Number(productoLS[i].precio * productoLS[i].cantidad);
      subtotal = subtotal + element;
    }
    iva = parseFloat(subtotal * 0.21).toFixed(2);
    total = parseFloat(subtotal) + parseFloat(iva);

    $("#subtotal").text("$ " + subtotal.toFixed(2));
    $("#iva").text("$ " + iva);
    $("#total").val("$ " + total.toFixed(2));
  }

  obtenerEvento(e) {
    e.preventDefault();
    let id, cantidad, producto, productosLS;
    if (e.target.classList.contains("cantidad")) {
      producto = e.target.parentElement.parentElement;
      id = producto.querySelector("a").getAttribute("data-id");
      cantidad = producto.querySelector("input").value;
      let actualizarMontos = document.querySelectorAll("#subtotales");
      productosLS = this.obtenerProductosLocalStorage();
      productosLS.forEach(function (productoLS, index) {
        if (productoLS.id === id) {
          productoLS.cantidad = cantidad;
          actualizarMontos[index].innerHTML = Number(
            cantidad * productosLS[index].precio
          );
        }
      });
      localStorage.setItem("productos", JSON.stringify(productosLS));
    } else {
      //test
    }
  }
}
