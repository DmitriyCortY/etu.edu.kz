const top_minus_full_height = () => {
    for (let i = 0; i < $('[data-top-minus-full-height]').length; i++) {
        $('[data-top-minus-full-height]').eq(i).css({
            top: `-${$('[data-top-minus-full-height]').eq(i).outerHeight(true)}px`
        })
    }
}
top_minus_full_height()
$(window).on('resize', () => {
    top_minus_full_height()
})