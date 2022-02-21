<template>
    <div :class="`type${editItem.value} type`" :style="editItem.style">
        <img v-if="editItem.value == 1" :src="require('@/images/H5Editor/defaultImg.png')" alt="" :style="editItem.style">
        <div v-else-if="editItem.value == 9" :style="editItem.style">
            <el-carousel :style="editItem.style">
                <el-carousel-item v-for="item in editItem.imgs" :key="item.imgName" :style="item.style">
                    <!-- <h3 class="small">{{ item.imgName }}</h3> -->
                    <img :src="require('@/images/H5Editor/defaultImg.png')" alt="" :style="item.style">{{ item.imgName }}</img>
                </el-carousel-item>
            </el-carousel>
        </div>
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
@import './image.scss';
</style> 
