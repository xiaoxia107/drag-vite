import WordEditor from './Editors/WordEditor/WordEditor.vue'
import CustomEditor from './Editors/CustomEditor/Index.vue'
export default {
    name: 'PannelR',
    components: { WordEditor, CustomEditor },
    props: {
        editItem: Object
    },
    data () {
        return {

        }
    },
    methods: {
        changeWord (item) {
            this.$emit('changeWord',item)
        },
    },
    watch: {

    },
    mounted () {

    }
}
