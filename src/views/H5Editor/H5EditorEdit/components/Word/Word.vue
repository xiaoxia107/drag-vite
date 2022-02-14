<template>
<div class="word">
  {{  editItem }}
    <!-- <textarea  type="textarea" v-model="label"> -->
</div>
</template>

<script>
export default {
    name: 'Word',
    props: {
        editItem: Object
    },
    data (){
        return{
            label: ''
        }
    },
    mounted () {
        this.label = this.editItem.label
    },
}
</script>

<style scoped>
textarea{
    border: none;
    outline: none;
}
</style>
