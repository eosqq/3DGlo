const validation = () => {
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')
    const calcArray = [calcSquare, calcCount, calcDay]
    
    const formNames = document.querySelectorAll('.form-name')
    const topForms = document.querySelector('.top-form')
    const arrayNameForm = []

    const formEmails = document.querySelectorAll('.form-email')
    const formPhones = document.querySelectorAll('.form-phone')
    const formMess = document.querySelector('.mess')
    
    formNames.forEach((formName) => {
        arrayNameForm.push(formName, topForms)
        arrayNameForm.forEach((form) => {
            form.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^а-яА-Я\s\-]/gi, "")
            })
        })
    })
    
    formEmails.forEach((formEmail) => {
        formEmail.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\w\-\.\!\~\*\'\"\@]+/gi, "")
        })
    })

    formPhones.forEach((formPhone) => {
        formPhone.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9\(\)\-\+]/, "")
        })
    })

    formMess.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-я\-\ \0-9\,\!\?\:\;\.]/, "")
    })
    
    calcArray.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, "")
        })
    })
}

export default validation