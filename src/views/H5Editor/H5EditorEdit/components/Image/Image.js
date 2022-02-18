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
                console.log(val)
            }
        }
    },
    methods: {
        initImage () {
            this.imgName = this.editItem.imgName
        }
    },
    mounted () {
        console.log('图片啊图片=》', this.editItem)
        this.initImage()
    }
}