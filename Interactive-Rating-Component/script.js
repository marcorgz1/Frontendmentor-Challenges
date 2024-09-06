const buttons = document.querySelectorAll('.fondoCircular')
const $btnSubmit = document.querySelector('#submit-button')
const $errorMessage = document.querySelector('#errorMessage')
const $star = document.querySelector('#star')
const $punctuationMessage = document.querySelector('#punctuationMessage')

buttons.forEach(button => {
    button.addEventListener('click', () => {
    button.classList.toggle('valSelected')
    })
})

$btnSubmit.addEventListener('click', () => {
    // Recuperar todas las valoraciones marcadas
    const valsSelected = document.querySelectorAll('.valSelected')

    // Si las valoraciones seleccionadas son dos o más
    if (valsSelected.length >= 2) {
    // Mostrar alerta de error
    $errorMessage.innerHTML = 'ERROR: Solo se puede seleccionar una valoración.'
    } else if (valsSelected.length === 0){
    $errorMessage.innerHTML = 'ERROR: Debes de seleccionar una valoración.'
    } else {
        // Recuperar el contenido del valor seleccionado por el usuario
        const valSelected = valsSelected[0].textContent
        
        // Guardar el valor seleccionado por el usuario
        localStorage.setItem('valoration', valSelected)
        
        window.location.href = 'agradecimiento.html'
    }

    $star.addEventListener('click', () => {
        alert('ESTRELLITAAAAAAAAA!!! ⭐')
    })
})