<template>
  <div class="menucontent">
    <div class="componentItem">
      <slot></slot>
    </div>
    <div v-show="editItem && editItem.id == item.id" class="shape_controller n w"></div>
    <div v-show="editItem && editItem.id == item.id" class="shape_controller s w"></div>
    <div v-show="editItem && editItem.id == item.id" class="shape_controller n e"></div>
    <div v-show="editItem && editItem.id == item.id" class="shape_controller s e"></div>
    <div v-show="editItem && editItem.id == item.id" class="delItemIcon" @click.stop="handleDel">
      <span class="el-icon-circle-close"></span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ShapeController',
    props: {
        editItem: Object,
        item: Object
    },
    methods: {
        handleDel () {
            this.$emit('handleDel')
        }
    }
}
</script>

<style lang="scss" scoped>
.menucontent{
  width: 100%;
  height: 100%;
  position: relative;
}
.componentItem{
  width: 100%;
  height: 100%;
  overflow: hidden;
  word-break: break-all;
}
.delItemIcon{
  position: absolute;
  width: 14px;
  height: 14px;
  top: -16px;
  right: -16px;
  z-index: 2;
  cursor: pointer;
  color: #1960FF;
}
.shape_controller{
  position: absolute;
  width: 6px;
  height: 6px;
  background: #FFFFFF;
  border: 0.5px solid #1960FF;
  box-sizing: border-box;
}
.shape_controller.n.w {
  cursor: nw-resize;
}
.shape_controller.n.e {
  cursor: ne-resize;
}
.shape_controller.s.w {
  cursor: sw-resize;
}
.shape_controller.s.e {
  cursor: se-resize;
}
.n{
  top: -3px;
}
.w{
  left: -3px;
}
.s{
  bottom: -3px;
}
.e{
  right: -3px;
}
</style>
