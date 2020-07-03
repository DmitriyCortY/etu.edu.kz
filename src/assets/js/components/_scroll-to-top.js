$('.b-scroll-to-top').on('click', e => {
    $('html').animate({
        scrollTop: 0
    }, 666)
})

$('.b-scroll-to-top').fadeOut(333)
$(window).on('scroll', e => {
    if ($(window).scrollTop() <= $(window).innerHeight()) {
        $('.b-scroll-to-top').fadeOut()
    } else {
        $('.b-scroll-to-top').fadeIn()
    }
})