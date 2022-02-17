<template>
<div class="">
  <VideoView :editItem="editItem"  v-if="editItem.value == 1" />
  <QrCodeView :editItem="editItem"  v-if="editItem.value == 2" />
  <CustomView :editItem="editItem"  v-if="editItem.value == 3" />
  <PhoneView :editItem="editItem"  v-if="editItem.value == 4" />
</div>
</template>

<script>
import VideoView from './VideoView.vue'
import QrCodeView from './QrCodeView.vue'
import CustomView from './CustomView.vue'
import PhoneView from './PhoneView.vue'

export default {
    name: 'Index',
    props: {
        editItem: Object
    },
    components: {
        VideoView,
        QrCodeView,
        CustomView,
        PhoneView
    },
    data () {
        return {
            posterUrl: ''
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
