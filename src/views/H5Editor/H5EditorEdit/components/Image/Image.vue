<template>
    <div class="images">
        <img :src="require(`@/images/H5Editor/${imgName}.png`)" alt="">
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
