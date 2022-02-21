<template>
    <div class="word">
        <el-input :class="classes[editItem.value].class" ref="input" :style="{
            color: editItem.style.color,
            fontWeight:editItem.style.fontWeight,
            fontSize: editItem.style.fontSize + 'px',
            fontFamily:editItem.style.fontFamily,
            fontStyle:editItem.style.fontStyle,
            textDecoration:editItem.style.textDecoration,
            }" :autosize="true" type="textarea" v-model="label" resize="none" @click.stop>
        </el-input>
    </div>
</template>

<script>
import Word from "./Word.js"
export default {
    ...Word
}
</script>

<style lang="scss" scoped>
@import './Word.scss';
::v-deep .el-textarea__inner {
    border: none;
    outline: none;
    background: none;
}
</style>
