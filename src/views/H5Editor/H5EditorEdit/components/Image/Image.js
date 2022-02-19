export default {
    name: "Image",
    props: {
        editItem: Object
    },
    data () {
        return {
            imgSrc: null,
            imgName: '',
            style: {}
        };
    },
    watch: {
        editItem: {
            // immediate: true,
            deep: true,
            handler (val) {
                if (this.editItem.imgs && this.editItem.value != 9) {
                    // let multipleW = val.w / 108
                    // let multipleH = val.h / 108
                    // this.editItem.imgs.forEach(item => {
                    //     item.style.width = (parseInt(item.style.width) * multipleW) + 'px'
                    //     item.style.height = (parseInt(item.style.height) * multipleH) + 'px'
                    // })
                } else {
                    this.editItem.style.width = val.w + 'px'
                    this.editItem.style.height = val.h + 'px'
                }

            }
        }
    },
    methods: {
        initImage () {
            this.imgName = this.editItem.imgName
            if (this.editItem.imgs) {
                if (this.editItem.value != 9) {
                    this.editItem.imgs.forEach(item => {
                        item.style.width = item.style.width
                        item.style.height = item.style.height
                    })
                }
            } else {
                this.editItem.style.width = this.editItem.style.width + 'px'
                this.editItem.style.height = this.editItem.style.height + 'px'
            }
        }
    },
    mounted () {
        this.initImage()
    }
}