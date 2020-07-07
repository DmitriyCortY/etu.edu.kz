class Menu {
    constructor(c = {}) {
        this.trigger = c.trigger || $('.b-menu-trigger') // jQuery.object
        this.header = c.header || $('.b-header') // jQuery.object
        this.t = 650
        this.status = false
        this.menu = c.menu || $('.b-header__menu') // jQuery.object

        this.start()
    }
    start() {
        this.listener()
        this.menu.slideUp(this.t)
    }
    listener() {
        this.trigger.on('click', e => {
            this.handler_click()
        })
    }
    handler_click() {
        $('body').toggleClass('_ov-h')
        if (!this.status) {
            this.trigger.toggleClass('active')
            this.header.toggleClass('active_1')
            setTimeout(() => {
                this.header.toggleClass('active_2')
            }, this.t)
            setTimeout(() => {
                this.menu.slideDown(this.t)
                this.header.toggleClass('active_3')
            }, this.t * 2)
            this.status = !this.status
        } else {
            this.menu.slideUp(this.t)
            this.header.toggleClass('active_3')
            setTimeout(() => {
                this.header.toggleClass('active_2')
            }, this.t)
            setTimeout(() => {
                this.header.toggleClass('active_1')
                this.trigger.toggleClass('active')
            }, this.t * 2)
            this.status = !this.status
        }

    }
}

new Menu()