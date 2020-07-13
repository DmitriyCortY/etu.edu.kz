class Fileinput {
    constructor(config) {
        this.input = config.input
        this.selected_file = null
        this.urlPhoto = ''
        this.placeholder = null


        this.init()
    }
    init() {

        this.input.on('change', e => {
            let file = e.target.files[0];
            $(e.target).parent().children('.b-file-input__name').text(file.name)
        })
    }
}

new Fileinput({
    input: $('.b-file-input')
})