<template>
    <div class="list-image-item">
        <div :class="`type${element.value} type`">
            <img v-if="element.value == 1" :src="require('@/images/H5Editor/defaultImg.png')" alt="" :style="element.style">
            <div :class="`moreImgs${element.value} morImgs`" v-else v-for="item in element.imgs">
                <img :src="require('@/images/H5Editor/defaultImg.png')" alt="" :style="item.style">
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'MenuImage',
    props: {
        element: Object,
    },
    methods: {
        initImgMenu () {
            if (this.element.imgs) {
                this.element.imgs.forEach(item => {
                    item.style.width = item.style.width + 'px'
                    item.style.height = item.style.height + 'px'
                })
            } else {
                this.element.style.width = this.element.style.width + 'px'
                this.element.style.height = this.element.style.height + 'px'
            }
        }
    },
    mounted () {
        this.initImgMenu()
        console.log('这是图片那边==》', this.element)
    },
}
</script>

<style lang="scss" scoped>
.list-image-item {
    padding: 0 12px;
    .type {
        height: 108px;
        width: 108px;
        border-radius: 5px;
        margin-left: 8px;
        margin-top: 8px;
        border: 1px solid #666;
    }
}
</style>
