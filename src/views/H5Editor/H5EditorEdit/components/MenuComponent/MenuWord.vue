<template>
  <vuedraggable class="dragArea list-group" dragClass="ghost" chosenClass="ghost" :sort="false" :group="{ name: 'menucomponents', pull: 'clone', put: false }">
     <div :data-type="element.type" :data-value="element.value" class="list-group-item move" :class="`list-group-item${element && element.value}`">{{ element.label }}</div>
  </vuedraggable>
</template>

<script>
import vuedraggable from 'vuedraggable'
export default {
    name: 'MenuWord',
    props: {
        element: Object
    },
    components: {
        vuedraggable,
    },
}
</script>

<style lang="scss" scoped>
.list-group-item1,
.list-group-item2,
.list-group-item3 {
    text-align: center;
    margin-top: 16px;
}
.list-group-item1 {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
}
.list-group-item2 {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
}
.list-group-item3 {
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
}
</style>
