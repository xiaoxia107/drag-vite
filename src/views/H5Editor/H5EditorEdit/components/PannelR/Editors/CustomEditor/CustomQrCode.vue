<template>
  <div class="qrCode" v-if="editItem">
    <div class="label">内容</div>
    <el-input placeholder="请输入内容" v-model="editItem.url" class="input-with-select mtop10">
      <el-button slot="append" icon="el-icon-search" @click="generateQrCode"></el-button>
    </el-input>
<!--    <div class="label">标志</div>-->
    <div class="label mtb16">样式</div>
    <div class="qrCode-css">
     <div class="codeCss">
       <qrcode
           id="qrcodeID"
           v-if="!refresh"
           :url="editItem.url"
           :wid="46"
           :hei="46"
           :colorDark="editItem.colorDark"
           :colorLight="editItem.colorLight">
       </qrcode>
     </div>
      <div class="qrCode-color">
        <div class="setcolor">
          前景色
          <div class="colorpicker" :style="{ background: editItem.colorDark }">
            <el-color-picker @change="changeQrCode($event, 1)" class="picker" v-model="editItem.colorDark"></el-color-picker>
          </div>
        </div>
        <div class="setcolor" style="margin-left: 10px">
          背景色
          <div class="colorpicker" :style="{ background: editItem.colorLight }">
            <el-color-picker  @change="changeQrCode($event, 2)"  class="picker" v-model="editItem.colorLight"></el-color-picker>
          </div>
        </div>
      </div>
    </div>
    <div class="label mt16">自定义</div>
    <div class="mt10 uploadFileBtn" @click="uploadFile">
      <span class="uploadFileBtn-l">上传二维码</span>
      <img :src="require('@/images/H5Editor/upload.png')" alt="" />
    </div>

  </div>
</template>

<script>
import qrcode from 'vue_qrcodes'
import domtoimage from 'dom-to-image'
import {filesAnon} from '@/apiModules/apiMethods/h5editor/index'
export default {
    name: 'CustomQrCode',
    props: {
        editItem: Object
    },
    components: {
        qrcode
    },
    data () {
        return {
            refresh: false
        }
    },
    methods: {
        generateQrCode () {
            let qrcodeID = document.getElementById('qrcodeID')
            domtoimage.toBlob(qrcodeID).then(blobFile => {
                let templateThumbnail = new File([blobFile], 'qrcode.png', { type: 'image/png', lastModified: Date.now() })
                let form = new FormData()
                form.append('file', templateThumbnail)

                filesAnon(form).then(result => {
                    return result
                }).then(res => {
                    this.editItem.customSrc = res.url
                })
            })
        },
        changeQrCode (val, type) {
            if (!val) {
                if (type == 1) {
                    this.editItem.colorDark = '#000'
                }
                if (type == 2) {
                    this.editItem.colorLight = '#fff'
                }
            }
            this.refresh = true
            this.$nextTick(() => {
                this.refresh = false
            })
        },
        uploadFile () {
            this.$emit('uploadFile')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../PannelR.scss';
.qrCode{
  &-css{
    padding: 16px 16px 6px 16px;
    background: #F7F8FB;
    border-radius: 4px;
  }
  &-color{
    padding: 10px 12px 8px 12px;
    display: flex;
    background: #fff;
    .setcolor{
      flex: 1;
    }
  }
  .codeCss{
    margin-bottom: 14px;
  }
  .mtb16{
    margin: 16px 0;
  }
}
</style>
<style lang="scss">
.colorpicker{
  width: 88px;
  height: 26px;
  position: relative;
  margin-top: 6px;
  border-radius: 4px;
  border: 1px solid #f8f8f8;
  .picker{
    width: 100%;
    height: 100%;
    overflow: hidden;
    opacity: 0;
    .el-color-picker__trigger{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
