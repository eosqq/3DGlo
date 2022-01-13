const calc = () => {
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')

    const formNames = document.querySelectorAll('.form-name')
    const formEmails = document.querySelectorAll('.form-email')
    const formPhones = document.querySelectorAll('.form-phone')
    const formMess = document.querySelectorAll('.mess')
    
    formNames.forEach((formName) => {
        formName.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-я]/, "")
        })
    })
    
    formEmails.forEach((formEmail) => {
        formEmail.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9a-zA-z\@\-\_\.\!\~\*\']/, "")
        })
    })

    formPhones.forEach((formPhone) => {
        formPhone.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9\()\-]/, "")
        })
    })

    formMess.forEach((formMes) => {
        formMes.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-я\-\ ]/, "")
        })
    })

    let inputNumber = [calcSquare, calcCount, calcDay]
    inputNumber.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, "")
        })
    })
    
}

export default calc