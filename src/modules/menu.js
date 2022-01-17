const menu = () => {
    const menu = document.querySelector('menu')
    const menuItems = menu.querySelectorAll('ul>li>a')
    const container = document.querySelector(".container");

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    container.addEventListener('click', (e) => {
        if (e.target.closest('.menu')) {
            handleMenu()
        }
    })

    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-btn') || e.target.closest('ul>li>a')) {
            handleMenu()
        }
    })
}

export default menu