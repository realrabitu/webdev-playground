const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    const isOpen = hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active', isOpen);
    hamMenu.setAttribute('aria-expanded', String(isOpen));
    hamMenu.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});