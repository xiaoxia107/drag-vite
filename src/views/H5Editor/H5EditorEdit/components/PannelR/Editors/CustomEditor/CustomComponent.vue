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
    <div class="mt16 flexCenter">
      <el-input type="number"
                class="numberInput cssNumber"
                :min='12'
                :max='99'
                v-model="editItem.style.fontSize"
                @change="changeFontSize">
        <i slot="suffix" class="numberInput-suffix">px</i>
      </el-input>
      <el-input
          class="ml10"
          placeholder="请输入按钮文字"
          suffix-icon="el-icon-edit"
          v-model="editItem.label">
      </el-input>
    </div>
    <div class="flexCenter mt16">
      <span class="csslabel">透明度</span>
      <el-progress class="progress" :percentage="editItem.style.opacity"></el-progress>
      <el-input type="number"
                class="numberInput cssNumber"
                size="medium"
                :min='0'
                :max='100'
                v-model="editItem.style.opacity"
                @change="changeFontSize">
        <i slot="suffix" class="numberInput-suffix">%</i>
      </el-input>
    </div>
    <div class="flexCenter mt16">
      <span class="csslabel">圆角</span>
      <el-progress class="progress" :percentage="editItem.style.radius"></el-progress>
      <el-input type="number"
                class="numberInput cssNumber"
                size="medium"
                :min='0'
                :max='100'
                v-model="editItem.style.radius"
                @change="changeFontSize">
        <i slot="suffix" class="numberInput-suffix">px</i>
      </el-input>
    </div>
    <div class="mt16">
      <div>
        <el-checkbox v-model="editItem.ifHref">启动跳转链接</el-checkbox>
      </div>
      <el-input
          class="mt16"
          placeholder="请输入内容"
          v-model="editItem.link">
      </el-input>
    </div>
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
        changeFontSize () {},
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
.numberInput{
  position:relative;
  &-suffix{
    position:absolute;
    top:12px;
    right:12px;
    font-style:normal;
    color:#333333
  }
}
.cssNumber{
  flex: 0 0 66px;
}
.numberInput .el-input__inner{
  padding-right: 0;
}
.progress{
  margin-left: 10px;
  margin-right: 10px;
  flex: 1;
  .el-progress-bar{
    padding-right: 0;
  }
  .el-progress__text{
    display: none;
  }
}
.csslabel{
  flex: 0 0 60px;
}
</style>
