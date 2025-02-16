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

export const removeUser = () => {
  const groupTagsContainer = document.querySelector(
    '.group-tags .group-tags__items'
  )

  groupTagsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('group-tags__close')) {
      const tagItem = e.target.closest('.group-tags .group-tags__item')

      if (!tagItem) return

      tagItem.remove()
    }
  })
}

export const addUser = () => {
  const trigger = document.querySelector('.group-tags .group-tags__button')
  const groupTagsContainer = document.querySelector(
    '.group-tags .group-tags__items'
  )
  let userId = document.querySelectorAll('.group-tags__item').length + 1

  trigger.addEventListener('click', () => {
    const userName = prompt('Enter user name:')

    if (!userName) return

    const tagItem = document.createElement('div')
    tagItem.classList.add('group-tags__item')
    tagItem.id = userId
    tagItem.innerHTML = `
      <p class="group-tags__text">${userName}</p>
      <div class="group-tags__close"></div>
    `
    groupTagsContainer.appendChild(tagItem)

    userId++
  })
}
