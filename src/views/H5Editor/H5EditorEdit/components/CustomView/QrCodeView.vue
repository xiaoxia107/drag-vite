<template>
  <div class="h5qrcode" v-if="editItem">
    <img v-if="!editItem.customSrc" :src="require('@/images/H5Editor/defaultImg.png')" alt="">
    <img v-else :src="editItem.customSrc" alt="">
  </div>
</template>

<script>
export default {
    name: 'QrCodeView',
    props: {
        editItem: Object
    },
    components: {
    },
}
</script>

<style lang="scss" scoped>
.h5qrcode{
  img{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
