const caseGallery = () => {
  const galleries = document.querySelectorAll('[data-js="gallery-container"]')

  galleries.forEach((gallery) => {
    const thumbnails = gallery.querySelectorAll('[data-js="gallery-thumbnail"]')
    const mainImg = gallery.querySelector('[data-js="gallery-main-image"]')

    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener('click', () => {
        mainImg.src = thumbnail.src
      })
    })
  })
}

const openCase = () => {
  const cases = document.querySelectorAll('[data-js="case-container"]')

  cases.forEach((project) => {
    const caseButton = project.querySelectorAll('[data-js="case-button"]')
    const text = project.querySelector('.case-line-clamp')
    const thumbs = project.querySelector(
      '[data-js="gallery-thumbnail-container"]'
    )

    caseButton.forEach((button) => {
      button.addEventListener('click', () => {
        if (text.classList.contains('case-line-clamp')) {
          button.innerHTML = `
            fechar
            <i class="bi bi-x-lg"></i>
          `
        } else {
          button.innerHTML = `
            conheça o case
            <i class="bi bi-arrow-right"></i>
          `
        }
        text.classList.toggle('case-line-clamp')
        thumbs.classList.toggle('d-none')
      })
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  caseGallery()
  openCase()
})
