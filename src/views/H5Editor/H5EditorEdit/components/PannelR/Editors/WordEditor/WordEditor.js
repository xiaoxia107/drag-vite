import fontOption from '../../../../../Options/fontOption.js'
import _ from 'lodash'
export default {
    name: "WordEditor",
    props: {
        editItem: Object
    },
    data () {
        return {
            //字体
            fontOption: _.cloneDeep(fontOption),
        }
    },
    methods: {
        clickLab (key) {
            //加粗
            if (key == 'B') {
                if (this.editItem.style.fontWeight == 'normal') {
                    this.editItem.style.fontWeight = 'bold'
                } else if (this.editItem.style.fontWeight == 'bold') {
                    this.editItem.style.fontWeight = 'normal'
                }
                this.$emit('wordEdit', this.editItem)
            }

            //斜体
            if (key == 'I') {
                if (this.editItem.style.fontStyle == 'normal') {
                    this.editItem.style.fontStyle = 'italic'
                } else if (this.editItem.style.fontStyle == 'italic') {
                    this.editItem.style.fontStyle = 'normal'
                }
                this.$emit('wordEdit', this.editItem)
            }

            //下划线
            if (key == 'U') {
                if (this.editItem.style.textDecoration == 'none') {
                    this.editItem.style.textDecoration = 'underline'
                } else if (this.editItem.style.textDecoration == 'underline') {
                    this.editItem.style.textDecoration = 'none'
                }
                this.$emit('wordEdit', this.editItem)
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
    }
};