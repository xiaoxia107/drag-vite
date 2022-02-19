<template>
    <div :class="`type${editItem.value} type`">
            <img v-if="editItem.value == 1" :src="require('@/images/H5Editor/defaultImg.png')" alt="" :style="editItem.style">
            <img v-else-if="editItem.value == 9" :src="require('@/images/H5Editor/defaultBanner.png')" :style="editItem.style" alt="">
            <div :class="`moreImgs${editItem.value} moreImgs`" v-else v-for="item in editItem.imgs">
                <img :src="require('@/images/H5Editor/defaultImg.png')" alt="" :style="item.style">
            </div>
        </div>
</template>

<script>
import Image from './Image.js'
export default {
    ...Image
};
</script>

<style scoped lang="scss">
@import "./image.scss"
</style> 
