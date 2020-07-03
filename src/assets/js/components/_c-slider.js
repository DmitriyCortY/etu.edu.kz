class C_slider {
    constructor(c) {
        this.list = c.list
        this.items = c.items
        this.arrow_prev = c.arrow_prev
        this.arrow_next = c.arrow_next

        this.count = 0
        this.start()
    }
    start() {
        this.listener()
        this.set_width()
        this.set_pos_item()
        this.set_height()
    }
    set_pos_item() {
        for (let i = 0; i < this.items.length; i++) {
            this.items.eq(i).css({
                transform: `translate3d(${this.items.eq(i).outerWidth(true) * i}px, 0, 0)`
            })
            console.log(`translate3d(${this.items.eq(i).outerWidth(true) * i}px, 0, 0)`)
        }
    }
    set_height() {
        this.list.css({
            height: this.items.outerHeight(true)
        })
    }
    set_width() {
        for (let i = 0; i < this.items.length; i++) {
            this.items.eq(i).css({
                width: `25%`
            })
        }
    }
    move_prev() {
        this.count--

            for (let i = 0; i < this.items.length; i++) {
                this.items.eq(i).css({
                    transform: `translate3d(${this.items.eq(i).outerWidth(true) * (i - this.count)}px, 0, 0)`
                })
            }
    }
    move_next() {
        this.count++

            for (let i = 0; i < this.items.length; i++) {
                this.items.eq(i).css({
                    transform: `translate3d(${this.items.eq(i).outerWidth(true) * (i + this.count)}px, 0, 0)`
                })
            }
    }
    listener() {
        $(window).on('resize', e => {
            this.set_height()
            this.set_width()
            this.set_pos_item()
        })
        this.arrow_prev.on('click', e => {
            this.move_prev()
            console.log(this.count)
        })
        this.arrow_next.on('click', e => {
            this.move_next()
            console.log(this.count)
        })
    }
}
for (let i = 0; i < $('.b-c-slider__list').length; i++) {
    new C_slider({
        list: $('.b-c-slider__list').eq(i),
        items: $('.b-c-slider__list').eq(i).children('.b-c-slider__item'),
        arrow_prev: $('.b-c-slider__list').eq(i).children('.b-c-slider__arrow_prev'),
        arrow_next: $('.b-c-slider__list').eq(i).children('.b-c-slider__arrow_next'),
    })
}