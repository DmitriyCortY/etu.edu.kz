if ($('.b-cover').length > 0) {
    $('.b-lines__line').addClass('b-lines__line_light')
    $(window).scroll(function() {
        if ($(window).scrollTop() < 300) {
            $('.b-lines__line').addClass('b-lines__line_light')
        } else {
            $('.b-lines__line').removeClass('b-lines__line_light')
        }
        // 
        // 
        if ($(window).scrollTop() > $(window).innerHeight()) {
            $('.b-header').addClass('b-header_full')
        } else {
            $('.b-header').removeClass('b-header_full')
        }
    });
}