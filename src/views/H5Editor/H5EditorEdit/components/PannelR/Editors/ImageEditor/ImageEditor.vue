<template>
    <div class="ImageEditor" v-if="editItem && editItem.type == 2">
        {{editItem}}
    </div>
</template>

<script>
import ImageEditor from './ImageEditor.js'
export default {
    ...ImageEditor
};
</script>

<style scoped lang="scss">
@import './ImageEditor.scss';
</style>
