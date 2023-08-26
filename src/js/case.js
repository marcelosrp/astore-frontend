document.addEventListener('DOMContentLoaded', function () {
  const galleries = document.querySelectorAll('[data-js="gallery-container"]')

  galleries.forEach((gallery) => {
    const thumbnails = gallery.querySelectorAll('[data-js="gallery-thumbnail"]')
    const mainImg = gallery.querySelector('[data-js="gallery-main-image"]')

    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener('click', function () {
        mainImg.src = thumbnail.src
      })
    })
  })
})
