import '../scss/main.scss'
import '../scss/home.scss'

function addImagesToContainer(imageUrls) {
  const container = document.querySelector('.contact__clients__logos')

  imageUrls.forEach((url) => {
    const imgElement = document.createElement('img')
    imgElement.src = url
    imgElement.alt = 'logo'
    container.appendChild(imgElement)
  })
}

const imagesArray = new Array(26)
  .fill(null)
  .map((_, index) => `./${index + 1}.png`)

addImagesToContainer(imagesArray)

// eslint-disable-next-line no-undef, no-unused-vars
const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 1,
  spaceBetween: 72
})
