<template>
    <vuedraggable class="dragArea list-group" dragClass="ghost" chosenClass="ghost" :sort="false" :group="{ name: 'menucomponents', pull: 'clone', put: false }">
        <div :class="`type${element.value} type`" :data-type="element.type" :data-value="element.value">
            <img v-if="element.value == 1" :src="require('@/images/H5Editor/defaultImg.png')" alt="" :style="element.style">
            <img v-else-if="element.value == 9" :src="require('@/images/H5Editor/defaultBanner.png')" alt="">
            <div :class="`moreImgs${element.value} moreImgs`" v-else v-for="item in element.imgs">
                <img :src="require('@/images/H5Editor/defaultImg.png')" alt="" :style="item.style">
            </div>
        </div>
    </vuedraggable>
</template>

<script>
import vuedraggable from 'vuedraggable'
export default {
    name: 'MenuImage',
    props: {
        element: Object,
    },
    components: {
        vuedraggable
    },
    methods: {
        initImgMenu () {
            if (this.element.imgs) {
                if (this.element.value != 9) {
                    this.element.imgs.forEach(item => {
                        item.style.width = item.style.width + 'px'
                        item.style.height = item.style.height + 'px'
                    })
                }
            } else {
                this.element.style.width = this.element.style.width + 'px'
                this.element.style.height = this.element.style.height + 'px'
            }
        }
    },
    mounted () {
        this.initImgMenu()
    },
}
</script>

<style lang="scss" scoped>
.list-group {
    width: 108px;
    float: left;
    margin-left: 16px;
}
.type {
    height: 108px;
    width: 108px;
    border-radius: 5px;
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
    border: 1px dashed #c4c4c4;
}
img {
    display: block;
    margin: 0;
    border-radius: none;
}
.type2 {
    flex-direction: column;
}
.type5 {
    flex-direction: column;
}
.type9 {
    width: 239px;
    height: 121px;
}
</style>
