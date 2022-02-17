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
            color: '#555'
        }
    },
    methods: {
        clickLab (key) {
            if (key == 'B' && this.fontWeight == 'normal') {
                this.fontWeight = 'bold'
            } else if (key == 'B' && this.fontWeight == 'bold') {
                this.fontWeight = 'normal'
            }
            if (key == 'I' && this.fontStyle == 'normal') {
                this.fontStyle = 'italic'
            } else if (key == 'I' && this.fontStyle == 'italic') {
                this.fontStyle = 'normal'
            }
            if (key == 'U' && this.textDecoration == 'none') {
                this.textDecoration = 'underline'
            } else if (key == 'U' && this.textDecoration == 'underline') {
                this.textDecoration = 'none'
            }
        },
        changeType (val) {
            this.fontOption.forEach(item => {
                if (val == item.key) {
                    this.editItem.style.fontFamily = item.fontFamily
                    this.editItem.style.fontKey = val
                    this.$emit('changeWord', this.editItem)
                }
            });
        },
        changeFontSize (e) {
            this.editItem.style.fontSize = e
            this.$emit('changeWord', this.editItem)
        },
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