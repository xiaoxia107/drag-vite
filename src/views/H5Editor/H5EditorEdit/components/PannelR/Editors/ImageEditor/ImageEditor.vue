<template>
    <div class="ImageEditor" v-if="editItem && editItem.type == 2">
        <h4>图片</h4>
        <p class="replace" @click="changeImage">
            <img src="@/images/H5Editor/imgReplace.png" alt=""> 替换图片
        </p>
        <p class="cd">
            <span class="cut" @click="cutImage">
                <img src="@/images/H5Editor/imgCut.png" alt=""> 裁剪图片
            </span>
            <span class="del" @click="delImage">
                <img src="@/images/H5Editor/imgDel.png" alt=""> 移除图片
            </span>
        </p>
        <p>
            <el-checkbox v-model="ifHref" style="margin:13px 0" @change="changeCheck">启动跳转链接</el-checkbox>
        </p>
        <p>
            <el-input type="text" :disabled="!ifHref" v-model="href" placeholder="请输入内容" @change="changeHref" />
        </p>
        <el-dialog>

        </el-dialog>
    </div>
</template>

<script>
import ImageEditor from './ImageEditor.js'
export default {
    ...ImageEditor
};
</script>

<style scoped lang="scss">
@import './ImageEditor.scss';
</style>
