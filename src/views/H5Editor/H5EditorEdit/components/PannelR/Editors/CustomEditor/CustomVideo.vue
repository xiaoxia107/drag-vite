<template>
  <div class="editorVideo">
    <div class="label">视频设置</div>
    <div class="sublabel mt10">视频通用代码</div>
    <div class="setcontent mt16">
      <el-input v-model="editItem.commonVideo" class="setcontent-area" type="textarea" placeholder="请输入内容"></el-input>
    </div>
    <div class="label mt16">自定义</div>
    <div class="mt10 uploadFileBtn" @click="uploadFile">
      <span class="uploadFileBtn-l">选择视频</span>
      <img :src="require('@/images/H5Editor/upload.png')" alt="" />
    </div>
  </div>
</template>

<script>
export default {
    name: 'CustomVideo',
    props: {
        editItem: Object
    },
    methods: {
        uploadFile () {
            this.$emit('uploadFile', 1)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../PannelR.scss';
.setcontent{
  width: 236px;
  height: 100px;
  &-area{
    /deep/ .el-textarea__inner{
      min-height: 100px !important;
      background: #F7F8FB;
      border: none;
      border-radius: 4px;
    }
  }
}
</style>
