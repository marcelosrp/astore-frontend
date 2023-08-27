const scrollButton = document.querySelector('[data-js="scroll-to-top"]')
const scrollPosition = 700

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollPosition) {
    scrollButton.classList.remove('d-none')
    return
  }

  scrollButton.classList.add('d-none')
})

scrollButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
