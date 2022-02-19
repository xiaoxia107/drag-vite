<template>
  <div class="qrCode" v-if="editItem">
    <div class="label">颜色</div>
    <div class="qrCode-css mt16">
      <div class="qrCode-color">
        <div class="setcolor">
          文字颜色
          <div class="colorpicker" :style="{ background: editItem.style.color }">
            <el-color-picker  class="picker" v-model="editItem.style.color"></el-color-picker>
          </div>
        </div>
        <div class="setcolor" style="margin-left: 10px">
          背景颜色
          <div class="colorpicker" :style="{ background: editItem.style.background }">
            <el-color-picker  class="picker" v-model="editItem.style.background"></el-color-picker>
          </div>
        </div>
      </div>
    </div>
    <div class="label mt16">内容</div>
  </div>
</template>

<script>
export default {
    name: 'CustomComponent',
    props: {
        editItem: Object
    },
    components: {
    },
    data () {
        return {
        }
    },
    methods: {
        uploadFile () {
            this.$emit('uploadFile')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../PannelR.scss';
.qrCode{
  &-css{
    padding: 16px 16px 6px 16px;
    background: #F7F8FB;
    border-radius: 4px;
  }
  &-color{
    padding: 10px 12px 8px 12px;
    display: flex;
    background: #fff;
    .setcolor{
      flex: 1;
    }
  }
  .codeCss{
    margin-bottom: 14px;
  }
  .mtb16{
    margin: 16px 0;
  }
}
</style>
<style lang="scss">
.colorpicker{
  width: 88px;
  height: 26px;
  position: relative;
  margin-top: 6px;
  border-radius: 4px;
  border: 1px solid #f8f8f8;
  .picker{
    width: 100%;
    height: 100%;
    overflow: hidden;
    opacity: 0;
    .el-color-picker__trigger{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
