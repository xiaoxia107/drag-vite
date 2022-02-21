<template>
<div class="customEditor" v-if="editItem">
  <CustomVideo v-if="editItem.value == 1" :editItem="editItem" @uploadFile="uploadFile"/>
  <CustomQrCode v-if="editItem.value == 2" :editItem="editItem" @uploadFile="uploadFile"/>
  <CustomComponent v-if="editItem.value == 3" :editItem="editItem"/>
  <CustomPhone v-if="editItem.value == 4" :editItem="editItem"/>
  <input style="display: none" ref="form" type="file" class="fileHidden" @change="changeUpload($event)" />
</div>
</template>

<script>
import CustomVideo from './CustomVideo.vue'
import CustomQrCode from './CustomQrCode.vue'
import CustomComponent from './CustomComponent.vue'
import CustomPhone from './CustomPhone.vue'
import {filesAnon} from '@/apiModules/apiMethods/h5editor/index'

export default {
    name: 'CustomEditor',
    props: {
        editItem: Object
    },
    components: {
        CustomVideo,
        CustomQrCode,
        CustomComponent,
        CustomPhone
    },
    methods: {
        uploadFile (type) {
            this.$refs['form'].click()
        },
        changeUpload (event) {
            let file = event.target.files[0]
            this.setValue(file)
            this.resetInputForm()
        },
        setValue (file) {
            let elementType = this.editItem.elementType
            let fileType = 'MP4|mp4'
            let fileSize = 20
            /* eslint-disable */
            switch (elementType) {
                case 4:
                    fileType = 'MP4|mp4'
                    fileSize = 20
                    break
                case 5:
                    fileType = 'png|jpg|jpeg'
                    fileSize = 2
                    break
            }
            const fileExt = file.name.split('.').pop().toLocaleLowerCase()
            const extArr = fileType.split('|')
            const isAcceptExt = extArr.some(item => {
                return item === fileExt
            })
            const isLt2M = file.size / 1024 / 1024 < fileSize

            if (!isAcceptExt) {
                this.$message.error(`只能是${fileType}格式!`)
            }
            if (!isLt2M) {
                this.$message.error(`大小不能超过 ${fileSize}MB!`)
            }
            if (isAcceptExt && isLt2M) {
                let fd = new FormData()
                fd.append('file', file)
                filesAnon(fd).then(res => {
                    /* eslint-disable */
                  this.editItem.customSrc = res.url
            })
          }

        },
        resetInputForm () {
            if (this.$refs['form']) {
                this.$refs['form'].value = ''
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.customEditor{
}
</style>
