// class Cover_slider {
//     constructor(c) {
//         this.arrow_prev = $('[data-c-cover-slider-arrow-prev]')
//         this.arrow_next = $('[data-c-cover-slider-arrow-next]')
//         this.images = $('[data-c-cover-slider-images]').children()
//         this.contents = $('[data-c-cover-slider-contents]').children()
//         this.current_count = 0
//         this.length = null
//         this.flag_click = true
//         this.t = 500

//         this.start()
//     }
//     start() {
//         this.images.children().fadeOut(0)
//         this.images.eq(this.current_count).children().fadeIn(this.t)
//         this.contents.fadeOut(this.t)
//         this.contents.eq(this.current_count).fadeIn(this.t)

//         // 
//         if (this.images.length === this.contents.length) {
//             this.length = this.images.length
//         } else {
//             console.error('RUS: Количество изображений не совпадает с количеством контентов в слайдере первого экрана\n\rENG: The number of images does not match the number of contents in the slider of the first screen')
//         }
//         this.listener()
//         this.arrows_classes()
//     }
//     listener() {
//         if (this.flag_click) {
//             this.flag = false
//             this.arrow_prev.on('click', e => {
//                 this.handler_click_prev()
//             })
//             this.arrow_next.on('click', e => {
//                 this.handler_click_next()
//             })
//         }
//     }
//     handler_click_prev() {
//         if (this.current_count <= 0) {
//             this.arrows_classes()
//             return
//         } else {
//             this.current_count = this.current_count - 1
//             this.move()
//             this.arrows_classes()
//         }
//     }
//     handler_click_next() {
//         if (this.current_count >= this.length - 1) {
//             this.arrows_classes()
//             return
//         } else {
//             this.current_count = this.current_count + 1
//             this.move()
//             this.arrows_classes()
//         }
//     }
//     arrows_classes() {
//         if (this.current_count === 0) {
//             this.arrow_prev.addClass('disable')
//         } else if (this.current_count === this.length - 1) {
//             this.arrow_next.addClass('disable')
//         } else {
//             this.arrow_next.removeClass('disable')
//             this.arrow_prev.removeClass('disable')
//         }
//     }
//     move() {
//         // image
//         this.images.children().fadeOut(0) //Скрываем все изображения слайдов
//         for (let i = 0; i < this.images.eq(this.current_count).children().length; i++) { // Показываем правильное изображения слайда
//             this.images.eq(this.current_count).children().eq(i).fadeIn(this.t * i)
//         }

//         // content
//         this.contents.css({
//             position: 'absolute'
//         })
//         this.contents.fadeOut(this.t) // Скрываем все контенты слайдов
//         this.contents.children().fadeOut(0) // Скрываем все дочерние компоненты контента слайд

//         this.contents.eq(this.current_count).css({
//             position: 'relative'
//         })
//         this.contents.eq(this.current_count).fadeIn(this.t) // Показываем правильный контент
//         for (let i = 0; i < this.contents.eq(this.current_count).children().length; i++) {
//             this.contents.eq(this.current_count).children().eq(i).fadeIn(this.t * i)
//         }
//         setTimeout(() => {
//             this.flag = true
//         }, this.t * 4)
//     }
// }
// new Cover_slider()
const cover_slide_length = $('.b-cover-slide').length

$('.b-cover__nav-counter-current').text(`01`)
$('.b-cover__nav-counter-end').text(`0${cover_slide_length}`)
$('[data-cover-slider-arrow-prev]').on('click', e => {
    setTimeout(() => {
        for (let i = 0; i < $('.b-cover-slide').length; i++) {
            if ($('.b-cover-slide').eq(i).attr('tabindex') === '0') {
                $('.b-cover__nav-counter-current').text(`0${i + 1}`)
                console.log('css', ((100 / (cover_slide_length - 1)) * i) + '%')
                $('.b-cover__nav-counter-point').animate({
                    left: ((100 / (cover_slide_length - 1)) * i) + '%'
                }, 150)
            }
        }
    }, 1000)
})
$('[data-cover-slider-arrow-next]').on('click', e => {
    setTimeout(() => {
        for (let i = 0; i < $('.b-cover-slide').length; i++) {
            if ($('.b-cover-slide').eq(i).attr('tabindex') === '0') {
                $('.b-cover__nav-counter-current').text(`0${i + 1}`)
                console.log('css', ((100 / (cover_slide_length - 1)) * i) + '%')
                $('.b-cover__nav-counter-point').animate({
                    left: ((100 / (cover_slide_length - 1)) * i) + '%'
                }, 150)
            }
        }
    }, 1000)
})