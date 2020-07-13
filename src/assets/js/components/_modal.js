class Modal {
    constructor() {
        this.trigger = $('[data-modal-trigger]')
        this.content = $('[data-modal-content]')

        this.start()
    }
    start() {
        this.listener()
    }
    listener() {
        this.trigger.on('click', e => {
            this.hanlder_click(e)
        })
    }
    hanlder_click(e) {
        let e_c_t = e.currentTarget
        let name = $(e_c_t).attr('data-modal-trigger')
        $(`[data-modal-content="${name}"]`).toggleClass('active')
    }
}
new Modal()