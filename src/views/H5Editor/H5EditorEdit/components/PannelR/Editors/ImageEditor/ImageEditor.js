export default {
    name: "ImageEditor",
    props: {
        editItem: Object
    },
    data () {
        return {
            ifHref: false,
            href: ''
        }
    },
    methods: {
        //替换图片
        changeImage(){
            console.log('替换图片')
        },
        //裁剪图片
        cutImage(){
            console.log('裁剪图片')
        },
        //移除图片
        delImage(){
            console.log('删除图片')
        },
        //是否开启链接
        changeCheck (e) {
            this.editItem.style.ifHref = e
            if (e == false) {
                this.href = ''
            }
            // this.$emit('wordEdit', this.editItem)
        },
        //链接
        changeHref (e) {
            this.editItem.style.href = e
            // this.$emit('wordEdit', this.editItem)
        }
    },
    watch: {
        editItem (newVal, oldVal) {
            if (newVal) {

            }
        }
    },
};