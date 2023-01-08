$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
let numberInput = $('#floatingPhone')
let nameInput = $('#floatingName')
$('#buttonConfirm').on('click', (e) => {
    e.preventDefault();
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Gracias por tu compra ${nameInput.val()} `,
        text: ` Le hemos enviado un Whatsapp a ${numberInput.val()} con su comprobante de compra y el tiempo estimado el delivery!!.`,
        showConfirmButton: false,
        timer: 5000,
        footer: 'CocheraBar - Todos los derechos reservados ©'
      })
    carrito = {}
    MostrarCarro ()
})
