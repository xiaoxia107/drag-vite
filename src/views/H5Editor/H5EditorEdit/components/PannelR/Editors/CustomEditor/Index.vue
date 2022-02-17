<template>
<div class="customEditor" v-if="editItem">
  <CustomVideo v-if="editItem.value == 1" :editItem="editItem"/>
  <CustomQrCode v-if="editItem.value == 2" :editItem="editItem"/>
  <CustomComponent v-if="editItem.value == 3" :editItem="editItem"/>
  <CustomPhone v-if="editItem.value == 4" :editItem="editItem"/>
</div>
</template>

<script>
import CustomVideo from './CustomVideo.vue'
import CustomQrCode from './CustomQrCode.vue'
import CustomComponent from './CustomComponent.vue'
import CustomPhone from './CustomPhone.vue'

export default {
    name: 'CustomEditor',
    props: {
        editItem: Object
    },
    components: {
        CustomVideo,
        CustomQrCode,
        CustomComponent,
        CustomPhone
    }
}
</script>

<style lang="scss" scoped>
.customEditor{
}
</style>
