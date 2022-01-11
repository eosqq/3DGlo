const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')
    const closeBtn = modal.querySelector('.popup-close')

    const screenWidth = screen.width
    console.log(screen);
    
    let count = 0;
    let idAnimation;

    window.addEventListener('resize', () => {
        screenWidth = screen.width
    })

    const animation = () => {
        if (screenWidth >= 768) {
            count++
            idAnimation = requestAnimationFrame(animation)
            if (count * 0.06 <= 1) {
                modal.style.opacity = count * 0.06
            } else {
                cancelAnimationFrame(idAnimation)
                count = 0
            }
        } else {
            count = 0
        }
    }

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            animation()
            modal.style.display = 'block'
        })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })
}

export default modal