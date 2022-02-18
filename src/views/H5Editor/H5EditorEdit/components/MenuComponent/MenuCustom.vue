<template>
  <vuedraggable class="dragArea list-group" dragClass="ghost" chosenClass="ghost" :sort="false" :group="{ name: 'menucomponents', pull: 'clone', put: false }">
    <div class="h5video move list-group-item"  :data-type="element.type" :data-value="element.value">
      <div class="h5video-icon">
        <img v-if="element.imgName" :src="require(`@/images/H5Editor/${element.imgName}.png`)" alt="">
      </div>
      <div class="h5video-item">
        <div class="h5video-label">{{ element.label }}</div>
        <div class="h5video-sublabel">{{ element.subLabel }}</div>
      </div>
    </div>
  </vuedraggable>

</template>

<script>
import vuedraggable from 'vuedraggable'
export default {
    name: 'MenuCustom',
    props: {
        element: Object
    },
    components: {
        vuedraggable,
    },
    data () {
        return {
            MenuList: []
        }
    }
}
</script>

<style lang="scss" scoped>
.h5video{
  display: flex;
  align-items: center;
  width: 238px;
  height: 60px;
  margin: 14px 20px 0 20px;
  background: #F7F8FB;
  border-radius: 4px;
  &:first-child{
    margin-top: 22px;
  }
  &-icon{
    flex: 0 0 53px;
    text-align: center;
  }
  &-label{
    font-size: 14px;
    line-height: 14px;
    color: #333333;
  }
  &-sublabel{
    margin-top: 10px;
    font-size: 11px;
    line-height: 14px;
    color: #999999;

  }
}
</style>
