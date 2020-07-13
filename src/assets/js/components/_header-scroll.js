class Header_fixed_style_on_scrool {
    constructor() {
        this.last_scroll_top = 0
        this.current_scroll_top = window.pageYOffset || document.documentElement.scrollTop

        this.listener()
    }
    listener() {
        document.addEventListener('scroll', () => {
            this.current_scroll_top = window.pageYOffset || document.documentElement.scrollTop
            this.handler_scroll()
        }, false)
    }
    handler_scroll() {
        if (this.current_scroll_top > this.last_scroll_top) { //to bottom
            $('.b-header').css({
                transform: `translate3d(0, -100%, 0)`
            })
        } else { //to top
            $('.b-header').css({
                transform: `translate3d(0, 0, 0)`
            })
        }
        this.last_scroll_top = this.current_scroll_top <= 0 ? 0 : this.current_scroll_top
    }
}
new Header_fixed_style_on_scrool()