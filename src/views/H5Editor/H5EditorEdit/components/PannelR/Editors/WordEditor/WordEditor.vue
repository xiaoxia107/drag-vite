<template>
    <div class="wordEditor" v-if="editItem && editItem.type == 1">
        <el-select v-model="fontKey" class="typeInput" style="width:66%" @change="changeType">
            <el-option v-for="item in fontOption" :key="item.fontKey" :label="`${item.fontFamily}-${item.fontKey}`" :value="item.key">
            </el-option>
        </el-select>
        <el-input class="numInput" type="number" style="width:28%;margin-left:10px;position:relative" :min='12' :max='99' v-model="fontSize" @change="changeFontSize">
            <i slot="suffix" style="font-style:normal;position:absolute;top:12px;right:12px;color:#333333">px</i>
        </el-input>
        <p style="margin-top: 13px;width:100%">
            <el-color-picker style="width:80%" v-model="color" @change="changeColor"></el-color-picker>
        </p>
        <p class="textLab">
            <span :class="fontWeight == 'bold' ? 'active B' : 'B'" @click="clickLab('B')">B</span>
            <span :class="fontStyle == 'italic' ? 'active I' : 'I'" @click="clickLab('I')">I</span>
            <span :class="textDecoration == 'underline' ? 'active U' : 'U'" @click="clickLab('U')">U</span>
        </p>
        <!-- <p class="textLineHeight">
            行间距
        </p> -->
        <p>
            <el-checkbox v-model="ifHref" style="margin:13px 0" @change="changeCheck">启动跳转链接</el-checkbox>
        </p>
        <p>
            <el-input type="text" :disabled="!ifHref" v-model="href" placeholder="请输入内容" @change="changeHref" />
        </p>
    </div>
</template>

<script>
import WordEditor from './WordEditor.js'
export default {
    ...WordEditor
};
</script>

<style scoped lang="scss">
@import './WordEditor.scss';
</style>
