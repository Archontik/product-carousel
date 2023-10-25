const sliders = document.querySelectorAll('.slider__item')
const slidersList = document.querySelector('.slider__list')
const prevButton = document.querySelector('.slider__button--prev')
const nextButton = document.querySelector('.slider__button--next')

function deleteList(sliders) {
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].remove()
    }
}

deleteList(sliders)

let sliderIndex = [0, 1, 2, 3, 4]

showSliders(sliderIndex)

function showSliders(arrSlider) {
    for (let i = 0; i < arrSlider.length; i++) {
        slidersList.appendChild(sliders[arrSlider[i]])
    }
}

function nextSlide(arrSlide) {
    const res = []
    arrSlide.forEach(slide => {
        if (slide < sliders.length - 1) {
            slide++
        } else {
            slide = 0
        }
        res.push(slide)
    })
    sliderIndex = res
    deleteList(sliders)
    showSliders(sliderIndex)
    return sliderIndex
}

function prevSlide(arrSlide) {
    const res = []
    arrSlide.forEach(slide => {
        if (slide > 0) {
            slide--
        } else {
            slide = sliders.length - 1
        }
        res.push(slide)
        console.log(slide)
    })
    sliderIndex = res
    deleteList(sliders)
    showSliders(sliderIndex)
    return sliderIndex
}

prevButton.addEventListener('click', () => {
    prevSlide(sliderIndex)
    showSliders(sliderIndex)
})

nextButton.addEventListener('click', () => {
    nextSlide(sliderIndex)
    showSliders(sliderIndex)
})

