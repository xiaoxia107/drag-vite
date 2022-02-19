<template>
  <div class="h5custom" v-if="editItem">
    <div class="h5custom-player">
      <!--    <iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=p0040iz2h39" allowFullScreen="true"></iframe>-->
      <video v-if="editItem.value == 1"
             class="h5custom-video"
             controls
             :width="editItem.w"
             :height="editItem.h"
             :src="editItem.customSrc"></video>
    </div>


  </div>
</template>

<script>
export default {
    name: 'VideoView',
    props: {
        editItem: Object
    },
}
</script>

<style lang="scss" scoped>
.h5custom{
  width: 100%;
  height: 100%;
  overflow: hidden;
  &-player{
    iframe{
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
  &-video{
    background: url("../../../../../images/H5Editor/viewicon.png") no-repeat center center #C4C4C4;
    overflow: hidden;
  }
}
</style>
