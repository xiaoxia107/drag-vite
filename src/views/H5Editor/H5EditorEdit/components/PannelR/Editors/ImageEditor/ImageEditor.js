export default {
    name: "ImageEditor",
    props: {
        editItem: Object
    },
    data () {
        return {
            
        }
    },
    methods: {
        
    },
    watch: {
        editItem (newVal, oldVal) {
            if (newVal) {
                console.log('图片编辑==》',newVal)
            }
        }
    },
};