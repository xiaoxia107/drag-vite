import WordEditor from './Editors/WordEditor/WordEditor.vue'
import ImageEditor from './Editors/ImageEditor/ImageEditor.vue'
import BgImgEditor from './Editors/BgImgEditor/BgImgEditor.vue'
import CustomEditor from './Editors/CustomEditor/Index.vue'

export default {
    name: 'PannelR',
    components: { WordEditor, ImageEditor, BgImgEditor, CustomEditor },
    props: {
        editItem: Object
    },
    data () {
        return {

        }
    },
    methods: {
        wordEdit (item) {
            this.$emit('wordEdit', item)
        },
    },
    watch: {

    },
    mounted () {

    }
}
