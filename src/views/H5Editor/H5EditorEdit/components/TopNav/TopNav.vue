<template>
  <div class="topNav">
    <div class="topNav-l">
      <div class="topNav-back">
        <span class="el-icon-arrow-left"></span>
      </div>
      <el-input class="topNav-name"
                size="medium"
                placeholder="请输入名称"
                suffix-icon="el-icon-edit"
                v-model="name">
      </el-input>
    </div>
    <div class="topNav-r">
      <el-button class="topNav-btn" type="text" @click="handleNavClick('preview')"><img :src="require('@/images/H5Editor/viewicon_1.png')" alt="">预览</el-button>
      <el-button class="topNav-btn" type="text" @click="handleNavClick('save')"><img :src="require('@/images/H5Editor/saveicon_1.png')" alt="">保存</el-button>
      <el-button class="topNav-btn" type="text" @click="handleNavClick('del')"><img :src="require('@/images/H5Editor/delicon_1.png')" alt="">删除</el-button>
      <el-button type="primary" size="medium">发布</el-button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TopNav',
    props: {
        templateName: String
    },
    data () {
        return {
            name: ''
        }
    },
    methods: {
        handleNavClick (func) {
            this.$emit('handleNavClick', func)
        }
    }
}
</script>

<style lang="scss" scoped>
.topNav{
  padding: 0 22px;
  height: 58px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #F8F8F8;
  &-l{
    flex: 1;
    display: flex;
    align-items: center;
  }
  &-back{
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    border-radius: 2px;
    background: #F4F5F7;
    color: #B0B2BA;
  }
  &-name{
    width: 217px;
    margin-left: 32px;
  }
  &-btn{
    img{
      vertical-align: middle;
      margin-right: 10px;
    }
  }
}
</style>
