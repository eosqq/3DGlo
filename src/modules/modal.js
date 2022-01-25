import { animate } from "./helpers"

const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')

    let screenWidth = screen.width

    window.addEventListener('resize', () => {
        screenWidth = screen.width
    })

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (screenWidth >= 768) {
                animate({
                    duration: 300,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                        modal.style.opacity = progress
                    },
                  });
            }
            modal.style.display = 'block'   
        })
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
        }
    })
}

export default modal