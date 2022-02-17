<template>
  <div className="customComponent">
    <div className="label">颜色</div>
    <div className="label">内容</div>
  </div>
</template>

<script>
export default {
    name: 'CustomPhone',
    props: {
        editItem: Object
    }
}
</script>

<style scoped>
@import '../../PannelR.scss';
</style>
