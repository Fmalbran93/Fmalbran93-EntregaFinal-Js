$(cards).on('click', (e) => {
    AgregarAcarro(e)
})

const AgregarAcarro = (e) => {
    const buttonCheckeado = e.target.classList.contains('buttonComprar')
    buttonCheckeado ? setCarro(e.target.parentElement) : null;
    if (buttonCheckeado) {
        Swal.fire({
            position: 'top-start',
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: false,
            toast: true,
            timer: 1000
          })
    }
    e.stopPropagation()
}

items.addEventListener('click', (e) => {
    actionBtn(e)
})

const setCarro = (object) => {
    const productoCarrito = {
        id: object.querySelector('.buttonComprar').dataset.id,
        title: object.querySelector('h5').textContent,
        precio : object.querySelector('p').textContent,
        cantidad : 1
    }

    carrito.hasOwnProperty(productoCarrito.id) ? productoCarrito.cantidad = carrito[productoCarrito.id].cantidad + 1 : null;

    carrito[productoCarrito.id] = {...productoCarrito}
    MostrarCarro ()
}

const MostrarCarro = () => {
    items.innerHTML = ''
    Object.values(carrito).forEach(product => {
        cartTemplate.querySelector('th').textContent = product.id 
        cartTemplate.querySelector('.title').textContent = product.title 
        cartTemplate.querySelector('.quantity').textContent = product.cantidad 
        cartTemplate.querySelector('.Sumar').dataset.id = product.id
        cartTemplate.querySelector('.restar').dataset.id = product.id
        cartTemplate.querySelector('span').textContent = product.cantidad * product.precio

        const clone = cartTemplate.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
    
    MostrarFooter()

    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const MostrarFooter = () => {
    footer.innerHTML = ''
    const checkCarro = Object.keys(carrito).length
    if (checkCarro === 0 ) {
        footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`
        return
    }

    const nCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad,0 )
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio,0 )

    footerTemplate.querySelector('.total-products').textContent = nCantidad
    footerTemplate.querySelector('span').textContent = nPrecio


    // Contador productos al lado del carrito
    document.querySelector('.numeroItems').textContent = nCantidad
    document.querySelector('.numeroItemsMobile').textContent = nCantidad

    const clone = footerTemplate.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)

    $('#vaciar-carrito').on('click',() => {
        carrito = {}
        MostrarCarro ()
    })
    
}

const actionBtn = (e) => {
    const SumarButton = e.target.classList.contains('Sumar')
    const restarButton = e.target.classList.contains('restar')

    if (SumarButton) {
        const product = carrito[e.target.dataset.id]
        product.cantidad++
        carrito[e.target.dataset.id] = {...product}
        MostrarCarro ();
    }

    if (restarButton) {
        const product = carrito[e.target.dataset.id]
        product.cantidad--
        product.cantidad === 0 ? delete carrito[e.target.dataset.id] : null
        MostrarCarro ();
    }

    e.stopPropagation()
}
