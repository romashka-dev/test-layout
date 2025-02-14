export const toggleMobileMenu = () => {
  const burgerMenu = document.querySelector('.burger-menu')
  const navigationMenu = document.querySelector('.header-navigtation')

  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
    navigationMenu.classList.toggle('active')
  })
}
