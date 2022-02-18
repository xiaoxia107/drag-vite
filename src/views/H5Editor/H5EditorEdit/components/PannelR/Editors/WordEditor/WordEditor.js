import fontOption from '../../../../../Options/fontOption.js'
import _ from 'lodash'
export default {
    name: "WordEditor",
    props: {
        editItem: Object
    },
    data () {
        return {
            //文字编辑
            fontOption: _.cloneDeep(fontOption),
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            fontKey: 1,
            fontSize: 12,
            color: '#555',
            ifHref: false,
            href: ''
        }
    },
    methods: {
        clickLab (key) {
            //加粗
            if (key == 'B') {
                if (this.fontWeight == 'normal') {
                    this.fontWeight = 'bold'
                } else if (this.fontWeight == 'bold') {
                    this.fontWeight = 'normal'
                }
                this.changeFontWeight()
            }

            //斜体
            if (key == 'I') {
                if (this.fontStyle == 'normal') {
                    this.fontStyle = 'italic'
                } else if (this.fontStyle == 'italic') {
                    this.fontStyle = 'normal'
                }
                this.changeFontStyle()
            }

            //下划线
            if (key == 'U') {
                if (this.textDecoration == 'none') {
                    this.textDecoration = 'underline'
                } else if (this.textDecoration == 'underline') {
                    this.textDecoration = 'none'
                }
                this.changeTextDecoration()
            }

        },
        //字体
        changeType (val) {
            this.fontOption.forEach(item => {
                if (val == item.key) {
                    this.editItem.style.fontFamily = item.fontFamily
                    this.editItem.style.fontKey = val
                    this.$emit('wordEdit', this.editItem)
                }
            });
        },
        //字号
        changeFontSize (e) {
            this.editItem.style.fontSize = e
            this.$emit('wordEdit', this.editItem)
        },
        //字体颜色
        changeColor (e) {
            this.editItem.style.color = e
            this.$emit('wordEdit', this.editItem)
        },
        //加粗
        changeFontWeight () {
            this.editItem.style.fontWeight = this.fontWeight
            this.$emit('wordEdit', this.editItem)
        },
        //斜体
        changeFontStyle () {
            this.editItem.style.fontStyle = this.fontStyle
            this.$emit('wordEdit', this.editItem)
        },
        //下划线
        changeTextDecoration () {
            this.editItem.style.textDecoration = this.textDecoration
            this.$emit('wordEdit', this.editItem)
        },
        //是否开启链接
        changeCheck (e) {
            this.editItem.style.ifHref = e
            this.$emit('wordEdit', this.editItem)
        },
        //链接
        changeHref (e) {
            this.editItem.style.href = e
            this.$emit('wordEdit', this.editItem)
        }
    },
    watch: {
        editItem (newVal, oldVal) {
            if (newVal) {
                this.fontKey = newVal.style.fontKey
                this.fontSize = newVal.style.fontSize
                this.color = newVal.style.color
                this.fontWeight = newVal.style.fontWeight
                this.fontStyle = newVal.style.fontStyle
                this.textDecoration = newVal.style.textDecoration
            }
        }
    },
};