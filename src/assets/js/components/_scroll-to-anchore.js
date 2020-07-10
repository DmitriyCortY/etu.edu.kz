class Scroll_to_anchore {
    constructor() {
        this.trigger = $('a')
        this.t = 666

        this.listener()
    }
    listener() {
        this.trigger.on('click', e => {
            let t = $(e.target)
            if (t.attr('href').includes('#') && t.attr('href').length > 1) {
                e.preventDefault();
                let name = $(e.target).attr('href').replace('#', '')
                this.scroll_to(name)
            }
        })
    }
    scroll_to(name) {
        $('html,body').animate({
            scrollTop: $(`#${name}`).offset().top
        }, this.t);
    }
}
new Scroll_to_anchore()