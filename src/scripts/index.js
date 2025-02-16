export const toggleMobileMenu = () => {
  const burgerMenu = document.querySelector('.burger-menu')
  const navigationMenu = document.querySelector('.header-navigtation')

  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
    navigationMenu.classList.toggle('active')
  })
}

export const getPersonalMessage = () => {
  const input = document.querySelector('.group-message__input')
  const output = document.querySelector('.form .e-card__text')

  if (!criteria || !output) return

  input.addEventListener('input', () => {
    output.textContent = input.value
  })
}

export const getSelectText = (selectClass, outputClass) => {
  const select = document.querySelector(selectClass)
  const output = document.querySelector(outputClass)

  if (!select || !output) return

  const updateText = () => {
    output.textContent = select.selectedOptions[0].text
  }

  updateText()
  select.addEventListener('change', updateText)
}
