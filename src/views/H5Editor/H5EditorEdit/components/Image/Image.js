export default {
    name: "Imagee",
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
                        if (typeof (item.style.width) == 'number' && typeof (item.style.height) == 'number') {
                            item.style.width = item.style.width + 'px'
                            item.style.height = item.style.height + 'px'
                        }
                    })
                }
            } else {
                if (typeof (this.editItem.style.width) == 'number' && typeof (this.editItem.style.height) == 'number') {
                    this.editItem.style.width = val.w + 'px'
                    this.editItem.style.height = val.h + 'px'
                }
            }
        }
    },
    mounted () {
        this.initImage()
    }
}