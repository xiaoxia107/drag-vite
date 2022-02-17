export default {
    name: 'Word',
    props: {
        editItem: Object
    },
    data () {
        return {
            label: '',
            classes: [
                {
                    value: 0,
                    class: null
                }, {
                    value: 1,
                    class: 'bigTitle'
                }, {
                    value: 2,
                    class: 'subTitle'
                }, {
                    value: 3,
                    class: 'text'
                }
            ],
        }
    },
    watch: {
        editItem: {
            // immediate: true,
            deep: true,
            handler (val) {
                this.$refs.input.$el.style.fontWeight = val.style.fontWeight
                this.$refs.input.$el.style.fontSize = val.style.fontSize + 'px'
                this.$refs.input.$el.style.fontFamily = val.style.fontFamily
                this.$refs.input.$el.style.color = val.style.color
                this.$refs.input.$el.style.fontStyle = val.style.fontStyle
                this.$refs.input.$el.style.textDecoration = val.style.textDecoration
            }
        }
    },
    methods: {
        initWord () {
            this.label = this.editItem.label
        }
    },
    mounted () {
        this.initWord()
    },
}
