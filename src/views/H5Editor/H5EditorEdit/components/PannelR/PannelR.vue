<template>
    <div v-if="editItem" class="pannelR">
      <WordEditor v-if="editItem.type == 1" :editItem="editItem" @changeWord="changeWord"/>
      <CustomEditor v-if="editItem.type == 4"  :editItem="editItem" />
    </div>
</template>

<script>
import PannelR from './PannelR.js'
export default {
    ...PannelR
}
</script>

<style lang="scss" scoped>
@import './PannelR.scss';
</style>
