<template>
  <div class="customComponent">
    <div class="label">颜色</div>
    <div class="label">内容</div>
  </div>
</template>

<script>
export default {
    name: 'CustomComponent',
    props: {
        editItem: Object
    }
}
</script>

<style scoped>
@import '../../PannelR.scss';
</style>
