const manageForms = (props) => {
    console.log(props)
    console.log(props.form.valid)
    console.log(props.form.element)
    console.log(props.form.items)

    const { valid, element } = props.form

    if (valid) {
        element.reset()

        // повідомлення про успішну відправку
        const toast = document.querySelector('#submit-form-toast')

        if (toast) {
            props.components.Toast.getOrCreateInstance(toast).show()

            setTimeout(() => {
                props.components.Toast.getOrCreateInstance(toast).hide()
            }, 10000)
        }

        // закрити модалку при відправці форми
        if (element.id === 'application-form') {
            const modal = document.querySelector('#application.modal.show')

            if (modal) {
                props.components.Modal.getOrCreateInstance(modal).hide()
            }
        }
    }

    // false - не відправляє, true - відправляє
    return false
}
