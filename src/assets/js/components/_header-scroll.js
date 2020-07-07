// $(window).on('scroll', e => {
// if ($(window).scrollTop() > $(window).innerHeight()) {
$(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
    let delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);
    if (delta >= 0) {
        $('.b-header').css({
            transform: `translate3d(0, 0, 0)`
        })
    } else {
        $('.b-header').css({
            transform: `translate3d(0, -100%, 0)`
        })
    }
});
// }
// })